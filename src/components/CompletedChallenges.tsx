import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChanlleges() {
    return (
        <div className={styles.completedChanllegesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}