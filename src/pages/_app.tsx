// Page thats is used for components that are always showed in the page

import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';


function MyApp({ Component, pageProps }) {


  return (
    <Component {...pageProps} />
  )
}

export default MyApp
