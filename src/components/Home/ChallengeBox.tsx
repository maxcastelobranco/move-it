import styles from "../../styles/components/Home/ChallengeBox.module.scss";
import ArrowUpPlus from "../svgs/ArrowUpPlus";
import Body from "../svgs/Body";
import { useChallengesContext } from "../../context/providers/ChallengesProvider";
import Eye from "../svgs/Eye";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChallengesActionTypes, CountdownActionTypes } from "../../context/types";
import { useCountdownContext } from "../../context/providers/CountdownProvider";

const challengeVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

export default function ChallengeBox() {
  const {
    state: { activeChallenge },
    dispatch: challengesDispatch,
  } = useChallengesContext();
  const { dispatch: countdownDispatch } = useCountdownContext();

  const completeChallenge = () => {
    challengesDispatch({
      type: ChallengesActionTypes.CompletedChallenge,
      payload: {
        earnedExperience: activeChallenge!.amount,
      },
    });
    countdownDispatch({
      type: CountdownActionTypes.ResetCountdown,
    });
  };
  const failChallenge = () => {
    challengesDispatch({
      type: ChallengesActionTypes.FailedChallenge,
    });
    countdownDispatch({
      type: CountdownActionTypes.ResetCountdown,
    });
  };

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {!activeChallenge && (
          <motion.div
            className={styles.challengeNotActive}
            variants={challengeVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <strong>Finish a cycle to receive a challenge</strong>
            <p>
              <ArrowUpPlus />
              Level up by completing challenges
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeChallenge && (
          <motion.div
            className={styles.challengeActive}
            variants={challengeVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <header>Earn {activeChallenge.amount} xp</header>
            <main>
              {activeChallenge.type === "body" ? <Body /> : <Eye />}
              <strong>New challenge</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}
                onClick={failChallenge}
              >
                I missed it!
              </button>
              <button
                type="button"
                className={styles.challengeCompletedButton}
                onClick={completeChallenge}
              >
                I did it!
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
