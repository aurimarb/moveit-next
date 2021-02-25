import styles from '../styles/pages/Home.module.css'
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChanlleges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Coutdown';

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChanlleges />
          <Countdown />
        </div>
        <div>
        </div>
      </section>
    </div>


  )
}
