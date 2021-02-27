import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChanlleges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChanllegesContainer}>
            <span>Desafios Completos {challengesCompleted}</span>
        </div>
    );
}