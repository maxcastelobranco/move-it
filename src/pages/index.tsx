import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.scss";
import CompletedChallenges from "../components/CompletedChallenges";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
      </section>
    </div>
  );
}
