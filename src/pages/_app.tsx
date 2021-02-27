// Page thats is used for components that are always showed in the page

import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';


function MyApp({ Component, pageProps }) {


  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
