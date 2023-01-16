import React from 'react'
import styles from './background.module.scss'
import wave from './img/wave.svg'

export default function Background() {
  return (
    <div className={`${styles.main} relative`}>
        <img 
            src={require('./img/background.png')} 
            alt=''
            className={styles.img}
        ></img>
            
        <div className={`${styles.waveWrap} wave-wrap z-5`}>
            <img className={`${styles.wave} max-w-none wave`} src={wave}  alt="" />
        </div>
    </div>
  )
}
