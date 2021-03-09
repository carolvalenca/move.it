import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

function Profile() {
    const { level } = useContext(ChallengesContext)
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/carolvalenca.png" alt="Caroliny Valença" />
            <div>
                <strong>Caroliny Valença</strong>
                <p>
                    <img src="icons/level.svg" alt="Level icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}

export default Profile