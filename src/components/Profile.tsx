import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fgru5-1.fna.fbcdn.net/v/t51.2885-19/154046481_800644220661130_2653907380726759356_n.jpg?_nc_ht=instagram.fgru5-1.fna.fbcdn.net&_nc_ohc=amjYFFlFGAUAX9hQVUo&oh=63d3bd39c6eb7ab1217ab7472c221c44&oe=6061574E" alt="Aurimar Bezerra" />
            <div>
                <strong>
                    Aurimar Bezerra
                </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}