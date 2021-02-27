import { userInfo } from 'os';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CoutdownContext } from '../contexts/CoutdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChanllegeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CoutdownContext)

    function handleChallengeDataSucceeded() {
        completeChallenge();
        resetCountdown();
    };

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    };

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                            </button>
                        <button
                            type="button"
                            className={styles.challengeSuccessededButton}
                            onClick={handleChallengeDataSucceeded}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeNotActive}>

                        <strong>
                            Inicie um ciclo para receber desafios a serem completados
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios
                        </p>
                    </div>
                )

            }

        </div>
    );
}