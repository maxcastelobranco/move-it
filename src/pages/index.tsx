import styles from "../styles/pages/Index.module.scss";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import nookies from "nookies";
import { ChallengesProvider, User } from "../context/providers/ChallengesProvider";
import { CountdownProvider } from "../context/providers/CountdownProvider";
import Sidebar from "../components/Home/Sidebar";
import React, { useState } from "react";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = nookies.get(context);

  const stringifiedUser = cookies["moveIt:user"];

  if (!stringifiedUser) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {} as never,
    };
  }

  const user = JSON.parse(stringifiedUser) as User;

  return {
    props: {
      user,
    },
  };
};

export enum Tabs {
  Home = "Home",
  Leaderboard = "Leaderboard",
}
const TAB_COMPONENTS: { [key in Tabs]: React.FC } = {
  [Tabs.Home]: Home,
  [Tabs.Leaderboard]: Leaderboard,
};
const IndexPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.Home);
  const TabComponent = TAB_COMPONENTS[selectedTab];

  return (
    <div className={styles.container}>
      <ChallengesProvider {...{ user }}>
        <CountdownProvider>
          <Sidebar {...{ selectedTab, setSelectedTab }} />
          <TabComponent />
        </CountdownProvider>
      </ChallengesProvider>
    </div>
  );
};

export default IndexPage;
