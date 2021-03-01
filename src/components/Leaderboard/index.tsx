import styles from "../../styles/pages/Laderboard.module.scss";
import { useUsers } from "../../hooks/useUsers";
import ArrowUp from "../svgs/ArrowUp";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-25%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function Leaderboard() {
  const { users } = useUsers();

  if (!users) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className={styles.container}>
      <header>
        <h1>Leaderboard</h1>
        <div>
          <div>
            <h2>position</h2>
            <h2>user</h2>
          </div>
          <div>
            <h2>completed challenges</h2>
            <h2>xp</h2>
          </div>
        </div>
      </header>
      <motion.section
        className={styles.leaderboard}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {users.map(
          ({ id, avatarUrl, username, level, challengesCompleted, currentExperience }, index) => {
            return (
              <motion.div key={id} variants={itemVariants}>
                <div>
                  <h3>{index + 1}</h3>
                  <div>
                    <img src={avatarUrl} alt={username} />
                    <div>
                      <h4>{username}</h4>
                      <div>
                        <ArrowUp width={16} height={16} />
                        Level {level}
                      </div>
                    </div>
                  </div>
                </div>
                <p>{challengesCompleted}</p>
                <p>{currentExperience}</p>
              </motion.div>
            );
          }
        )}
      </motion.section>
    </main>
  );
}
