import styles from "../../styles/pages/Home.module.scss";
import ExperienceBar from "./ExperienceBar";
import Profile from "./Profile";
import CompletedChallenges from "./CompletedChallenges";
import Countdown from "./Countdown";
import ChallengeBox from "./ChallengeBox";

export default function Home() {
  return (
    <main className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </main>
  );
}
