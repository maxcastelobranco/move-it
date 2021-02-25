import styles from "../styles/components/Countdown.module.scss";
import { useEffect, useMemo } from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import Check from "./svgs/Check";
import Close from "./svgs/Close";
import Start from "./svgs/Start";
import { useCountdownContext } from "../context/providers/CountdownProvider";
import { ChallengesActionTypes, CountdownActionTypes } from "../context/types";
import { useChallengesContext } from "../context/providers/ChallengesProvider";

const ANIMATION_DURATION = 0.4;

const buttonVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const buttonTransition: Transition = {
  duration: ANIMATION_DURATION,
  ease: "easeInOut",
};

export default function Countdown() {
  const {
    state: { time, active, countdownEnded },
    dispatch: countdownDispatch,
  } = useCountdownContext();
  const { dispatch: challengesDispatch } = useChallengesContext();

  const minutes = useMemo(() => Math.floor(time / 60), [time]);
  const seconds = useMemo(() => time % 60, [time]);
  const [leftMinute, rightMinute] = useMemo(() => String(minutes).padStart(2, "0").split(""), [
    minutes,
  ]);
  const [leftSecond, rightSecond] = useMemo(() => String(seconds).padStart(2, "0").split(""), [
    seconds,
  ]);

  let timeoutId: NodeJS.Timeout;

  const startCountdown = () => {
    countdownDispatch({
      type: CountdownActionTypes.StartCountdown,
    });
  };
  const resetCountdown = () => {
    clearTimeout(timeoutId);
    countdownDispatch({
      type: CountdownActionTypes.ResetCountdown,
    });
  };

  useEffect(() => {
    if (active && time > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutId = setTimeout(() => {
        countdownDispatch({
          type: CountdownActionTypes.DecreaseTime,
        });
      }, 1000);
    } else if (active && time === 0) {
      countdownDispatch({
        type: CountdownActionTypes.EndCountdown,
      });
      challengesDispatch({
        type: ChallengesActionTypes.StartNewChallenge,
      });
    }
  }, [active, time]);

  return (
    <div className={styles.container}>
      <div>
        <span>{leftMinute}</span>
        <span>{rightMinute}</span>
      </div>
      <span>:</span>
      <div>
        <span>{leftSecond}</span>
        <span>{rightSecond}</span>
      </div>
      <AnimatePresence initial={false}>
        {!active && (
          <motion.button
            type="button"
            className={[styles.countdownButton, styles.startCountdownButton].join(" ")}
            onClick={startCountdown}
            variants={buttonVariants}
            transition={buttonTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Start countdown
            <Start />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <motion.button
            type="button"
            className={[styles.countdownButton, styles.stopCountdownButton].join(" ")}
            onClick={resetCountdown}
            variants={buttonVariants}
            transition={buttonTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Reset countdown
            <Close />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {countdownEnded && (
          <motion.button
            className={[styles.countdownButton, styles.countdownEnded].join(" ")}
            variants={buttonVariants}
            transition={buttonTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            disabled
          >
            Countdown ended
            <Check />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
