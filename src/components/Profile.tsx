import styles from "../styles/components/Profile.module.scss";
import ArrowUp from "./svgs/ArrowUp";
import { useChallengesContext } from "../context/providers/ChallengesProvider";

export default function Profile() {
  const {
    state: { level },
  } = useChallengesContext();

  return (
    <div className={styles.container}>
      <img src="/scorpion.jpg" alt="Me" />
      <div>
        <strong> Max Branco</strong>
        <p>
          <ArrowUp />
          Level {level}
        </p>
      </div>
    </div>
  );
}
