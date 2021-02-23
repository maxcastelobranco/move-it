import styles from "../styles/components/ExperienceBar.module.scss";

export default function ExperienceBar() {
  return (
    <header className={styles.container}>
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }}>
          <span>50%</span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  );
}
