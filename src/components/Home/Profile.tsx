import styles from "../../styles/components/Home/Profile.module.scss";
import ArrowUp from "../svgs/ArrowUp";
import { useChallengesContext } from "../../context/providers/ChallengesProvider";

export default function Profile() {
  const {
    state: { level },
    currentUser,
  } = useChallengesContext();

  const { avatarUrl, firstName, lastName } = currentUser;

  return (
    <div className={styles.container}>
      <img src={avatarUrl} alt="Current user" />
      <div>
        <strong>
          {firstName} {lastName}
        </strong>
        <p>
          <ArrowUp />
          Level {level}
        </p>
      </div>
    </div>
  );
}
