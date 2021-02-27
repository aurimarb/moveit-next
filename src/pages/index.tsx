import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChanlleges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Coutdown';

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChanllegeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CoutdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >

        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChanlleges />
              <Countdown />
            </div>
            <div>
              <ChanllegeBox />
            </div>
          </section>
        </CountdownProvider>
      </ChallengesProvider>
    </div>
  )
}


// needs to be async and has this name getServerSideProps
// run before react rendering
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return ({
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  });
}