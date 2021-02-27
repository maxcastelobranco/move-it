import styles from "../styles/pages/Login.module.scss";
import GradientLogo from "../components/svgs/GradientLogo";
import Welcome from "../components/Login/Welcome";

export default function Login() {
  return (
    <div className={styles.container}>
      <div>
        <GradientLogo />
      </div>
      <Welcome />
    </div>
  );
}
