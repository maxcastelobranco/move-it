import styles from "../../styles/components/Home/Sidebar.module.scss";
import SidebarLogo from "../svgs/SidebarLogo";
import Home from "../svgs/Home";
import Leaderboard from "../svgs/Leaderboard";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Tabs } from "../../pages";
import React from "react";
import PowerOff from "../svgs/PowerOff";
import { destroyCookie } from "nookies";

interface SidebarProps {
  selectedTab: Tabs;
  setSelectedTab: React.Dispatch<React.SetStateAction<Tabs>>;
}

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export default function Sidebar({ selectedTab, setSelectedTab }: SidebarProps) {
  const logout = () => {
    destroyCookie(null, "moveIt:user");
    window.location.href = "/login";
  };

  return (
    <nav className={styles.container}>
      <SidebarLogo />
      <div>
        <button
          type="button"
          onClick={() => {
            setSelectedTab(Tabs.Home);
          }}
        >
          <AnimatePresence>
            {selectedTab === "Home" && (
              <motion.div {...{ variants }} initial="initial" animate="animate" exit="initial" />
            )}
          </AnimatePresence>
          <Home stroke={selectedTab === "Home" ? "#5965E0" : "#666666"} />
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedTab(Tabs.Leaderboard);
          }}
        >
          <AnimatePresence>
            {selectedTab === "Leaderboard" && (
              <motion.div {...{ variants }} initial="initial" animate="animate" exit="initial" />
            )}
          </AnimatePresence>
          <Leaderboard stroke={selectedTab === "Leaderboard" ? "#5965E0" : "#666666"} />
        </button>
      </div>
      <PowerOff onClick={logout} />
    </nav>
  );
}
