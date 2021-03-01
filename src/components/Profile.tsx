import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from  '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/31462662?s=460&u=2b11747224ca84fed090aacc949d1aec5723567a&v=4" alt="jules"/>
      <div>
        <strong>Jules Negri</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}     
        </p>
      </div>
    </div>
  )
}