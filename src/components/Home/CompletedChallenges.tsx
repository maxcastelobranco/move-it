import styles from "../../styles/components/Home/CompletedChallenges.module.scss";
import { useChallengesContext } from "../../context/providers/ChallengesProvider";

export default function CompletedChallenges() {
  const {
    state: { challengesCompleted },
  } = useChallengesContext();

  return (
    <div className={styles.container}>
      <span>Completed challenges</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
