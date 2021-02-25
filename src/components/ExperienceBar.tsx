import styles from "../styles/components/ExperienceBar.module.scss";
import { useChallengesContext } from "../context/providers/ChallengesProvider";

export default function ExperienceBar() {
  const {
    state: { currentExperience },
    nextLevelExperience,
    nextLevelPercentage,
  } = useChallengesContext();

  return (
    <header className={styles.container}>
      <span>{currentExperience} xp</span>
      <div>
        <div style={{ width: `${nextLevelPercentage}%` }}>
          <span>{nextLevelPercentage}%</span>
        </div>
      </div>
      <span>{nextLevelExperience} xp</span>
    </header>
  );
}
