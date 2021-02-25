import styles from "../styles/components/ExperienceBar.module.scss";
import { useChallengesContext } from "../context/providers/ChallengesProvider";

export default function ExperienceBar() {
  const {
    state: { currentExperience },
  } = useChallengesContext();

  return (
    <header className={styles.container}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${currentExperience / 6}%` }}>
          <span>{(currentExperience / 6).toFixed(2)}%</span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  );
}
