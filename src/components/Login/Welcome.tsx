import styles from "../../styles/components/Login/Welcome.module.scss";
import Logo from "../svgs/Logo";
import ArrowRight from "../svgs/ArrowRight";
import Github from "../svgs/Github";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../services/api";
import { destroyCookie, setCookie } from "nookies";
import { useState } from "react";
import AlertTriangle from "../svgs/AlertTriangle";

interface FormValues {
  username: string;
}

export default function Welcome() {
  const [error, setError] = useState(false);

  const { register, handleSubmit } = useForm<FormValues>({
    criteriaMode: "firstError",
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<FormValues> = async ({ username }) => {
    const response = await api.get("users", {
      params: {
        username: username,
      },
    });

    const [potentialUser] = response.data;

    if (potentialUser) {
      setError(false);
      destroyCookie(null, "moveIt:user");
      setCookie(null, "moveIt:user", JSON.stringify(potentialUser));
      window.location.href = "/";
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      <h1>Welcome</h1>
      <div className={styles.github}>
        <Github />
        Login with Github to continue
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register({
            required: {
              value: true,
              message: "Fill out your username",
            },
          })}
        />
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          <ArrowRight />
        </button>
      </div>
      {error && (
        <p>
          <AlertTriangle />
          User not found. Please try again.
        </p>
      )}
    </div>
  );
}
