import styles from "../styles/components/Profile.module.scss";
import ArrowUp from "./svgs/ArrowUp";

export default function Profile() {
  return (
    <div className={styles.container}>
      <img src="/scorpion.jpg" alt="Me" />
      <div>
        <strong> Max Branco</strong>
        <p>
          <ArrowUp />
          Level 999
        </p>
      </div>
    </div>
  );
}
