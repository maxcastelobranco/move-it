import ExperienceBar from "../components/Home/ExperienceBar";
import Profile from "../components/Home/Profile";
import styles from "../styles/pages/Home.module.scss";
import CompletedChallenges from "../components/Home/CompletedChallenges";
import Countdown from "../components/Home/Countdown";
import ChallengeBox from "../components/Home/ChallengeBox";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import nookies from "nookies";
import { ChallengesProvider, User } from "../context/providers/ChallengesProvider";
import { CountdownProvider } from "../context/providers/CountdownProvider";

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

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {
  return (
    <div className={styles.container}>
      <ChallengesProvider {...{ user }}>
        <CountdownProvider>
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
        </CountdownProvider>
      </ChallengesProvider>
    </div>
  );
};

export default Home;
