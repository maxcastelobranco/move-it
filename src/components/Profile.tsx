import styles from "../styles/components/Profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.container}>
      <img src="/scorpion.jpg" alt="Me" />
      <div>
        <strong> Max Branco</strong>
        <p>
          <img src="/icons/level.svg" alt="Level" />
          Level 999
        </p>
      </div>
    </div>
  );
}
