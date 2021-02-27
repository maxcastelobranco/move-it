import { motion, Transition, Variants } from "framer-motion";
import React from "react";

const ANIMATION_DURATION = 1.25;

const whiteVariants: Variants = {
  initial: {
    pathLength: 0,
    stroke: "#FFFFFF",
    fill: "#5965E0",
    strokeWidth: 2,
  },
  animate: {
    pathLength: 1,
    stroke: "#FFFFFF",
    fill: "#FFFFFF",
    strokeWidth: 0,
  },
};
const greenVariants: Variants = {
  initial: {
    pathLength: 0,
    stroke: "#FFFFFF",
    fill: "#5965E0",
    strokeWidth: 2,
  },
  animate: {
    pathLength: 1,
    stroke: "#4CD62B",
    fill: "#4CD62B",
    strokeWidth: 0,
  },
};
const transition: Transition = {
  duration: ANIMATION_DURATION,
  ease: "easeIn",
  fill: {
    delay: ANIMATION_DURATION,
    duration: ANIMATION_DURATION * 0.8,
  },
  strokeWidth: {
    delay: ANIMATION_DURATION,
  },
};

const delayTransition = (index: number): Transition => ({
  ease: "easeIn",
  pathLength: {
    duration: ANIMATION_DURATION,
    delay: index * 0.2,
  },
  stroke: {
    duration: ANIMATION_DURATION,
    delay: index * 0.2,
  },
  fill: {
    delay: ANIMATION_DURATION + index * 0.2,
    duration: ANIMATION_DURATION * 0.8,
  },
  strokeWidth: {
    duration: ANIMATION_DURATION,
    delay: ANIMATION_DURATION + index * 0.2,
  },
});

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="360" height="76" viewBox="0 0 360 76" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <motion.path
          id="logo-left"
          d="M11.1804 5.69226H28.4231L17.2468 60.7797H0L11.1804 5.69226Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          {...{ transition }}
        />
        <motion.path
          id="logo-mid"
          d="M36.7338 5.69226H53.9765L39.6321 75.9999H22.3894L36.7338 5.69226Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          {...{ transition }}
        />
        <motion.path
          id="logo-right"
          d="M62.0337 5.69226H79.2764L68.1001 60.7797H50.8533L62.0337 5.69226Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          {...{ transition }}
        />
        <motion.path
          id="m"
          d="M154.522 33.5139L149.306 58.7967H135.718L140.934 33.5139C141.343 31.5267 141.106 31.1604 139.18 31.1604H134.275C132.362 31.1604 131.961 31.5267 131.557 33.4634C131.557 33.4634 131.557 33.4971 131.557 33.5139L126.34 58.7967H112.74L117.96 33.5139C118.369 31.5267 118.132 31.1604 116.202 31.1604H111.297C109.367 31.1604 108.979 31.5309 108.57 33.5139L103.35 58.7967H89.762L97.7701 19.9862H108.807L110.557 23.3208C111.564 22.2294 112.782 21.3684 114.133 20.7939C115.484 20.2193 116.937 19.9442 118.398 19.9862H121.214C126.528 19.9862 130.114 22.3651 131.397 26.3859C133.772 21.9146 137.214 19.9862 141.372 19.9862H144.192C152.176 19.9862 156.235 25.2954 154.522 33.5139Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(0)}
        />
        <motion.path
          id="o"
          d="M195.961 33.5139L193.537 45.269C191.84 53.4875 185.586 58.7967 177.594 58.7967H167.301C159.321 58.7967 155.262 53.4833 156.959 45.2648L159.383 33.5139C161.075 25.2954 167.329 19.9862 175.325 19.9862H185.635C193.598 19.9862 197.662 25.2954 195.961 33.5139ZM182.361 33.5139C182.769 31.5266 182.532 31.1603 180.607 31.1603H175.701C173.772 31.1603 173.384 31.5308 172.975 33.5139L170.547 45.2648C170.138 47.2521 170.379 47.6184 172.304 47.6184H177.21C179.135 47.6184 179.528 47.2479 179.937 45.2648L182.361 33.5139Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(1)}
        />
        <motion.path
          id="v"
          d="M246.279 19.9862L221.085 58.7967H207.187L197.997 19.9862H212.881L216.883 45.4711L231.395 20.0073L246.279 19.9862Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(2)}
        />
        <motion.path
          id="e"
          d="M280.764 30.4235C280.267 32.6298 279.067 34.6011 277.355 36.0232L270.434 41.9176C268.775 43.3548 266.687 44.1631 264.519 44.208H254.937L254.72 45.248C254.312 47.2352 254.549 47.6015 256.478 47.6015H277.212L274.906 58.7799H251.458C243.479 58.7799 239.42 53.4665 241.116 45.248L243.54 33.497C245.237 25.2785 251.491 19.9694 259.483 19.9694H269.801C277.76 19.9862 281.876 25.0175 280.764 30.4235ZM266.53 33.5139C266.939 31.5266 266.702 31.1603 264.773 31.1603H259.867C257.946 31.1561 257.537 31.5308 257.128 33.5139L256.311 37.56H264.405C264.768 37.5445 265.116 37.4074 265.396 37.1696C265.676 36.9317 265.874 36.6061 265.958 36.2422L266.53 33.5139Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(3)}
        />
        <motion.path
          id="."
          d="M296.041 52.2076C295.289 55.8495 292.497 58.8009 288.274 58.8009C284.051 58.8009 282.481 55.8537 283.234 52.2076C283.986 48.5615 286.778 45.6185 291.001 45.6185C295.223 45.6185 296.781 48.5615 296.041 52.2076Z"
          variants={greenVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(4)}
        />
        <motion.path
          id="i"
          d="M325.196 19.9862L322.89 31.1561L317.167 58.7925H303.583L309.306 31.1561H302.524L304.834 19.982L325.196 19.9862ZM315.107 12.7403C312.752 10.0457 313.472 5.42283 316.705 2.42089C319.939 -0.581053 324.472 -0.82525 326.839 1.87355C329.206 4.57235 328.474 9.19525 325.241 12.1972C322.007 15.1991 317.465 15.4433 315.107 12.7403Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(5)}
        />
        <motion.path
          id="t"
          d="M347.001 25.5733L342.937 45.2649C342.528 47.2521 342.766 47.6184 344.691 47.6184H353.141L350.835 58.7967H339.679C331.7 58.7967 327.636 53.4834 329.333 45.2649L333.396 25.5733H328.258L330.563 14.395H335.714L337.602 5.24182H351.203L349.314 14.395H360.008L357.69 25.5733H347.001Z"
          variants={whiteVariants}
          initial="initial"
          animate="animate"
          transition={delayTransition(6)}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="360" height="76" />
        </clipPath>
      </defs>
    </svg>
  );
}
