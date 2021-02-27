import { motion, Transition } from "framer-motion";
import React from "react";

const transition: Transition = { repeat: Infinity, duration: 8, repeatType: "reverse" };

export default function GradientLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="700"
      height="660"
      viewBox="0 0 700 660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.08">
        <path d="M287.527 0H454.433L315.582 660H148.677L287.527 0Z" fill="url(#paint0_linear)" />
        <path d="M533.502 0H700L592.08 518.4H425.542L533.502 0Z" fill="url(#paint1_linear)" />
        <path d="M39.9594 0H206.458L98.5377 518.4H-68L39.9594 0Z" fill="url(#paint2_linear)" />
      </g>
      <defs>
        <motion.linearGradient
          id="paint0_linear"
          x1="301.555"
          y1="0"
          x2="301.555"
          y2="660"
          animate={{
            y2: [660 * 2, 660 * 0.2, 660],
          }}
          {...{ transition }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint1_linear"
          x1="562.771"
          y1="0"
          x2="562.771"
          y2="518.4"
          gradientUnits="userSpaceOnUse"
          animate={{
            y2: [518.4 * 2, 518.4 * 0.2, 518.4],
          }}
          {...{ transition }}
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint2_linear"
          x1="69.2288"
          y1="0"
          x2="69.2288"
          gradientUnits="userSpaceOnUse"
          animate={{
            y2: [518.4 * 2, 518.4 * 0.2, 518.4],
          }}
          {...{ transition }}
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
