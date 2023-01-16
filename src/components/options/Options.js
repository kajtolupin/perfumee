import React from 'react'
import styles from './options.module.scss'
import wave from './img/wave.svg'

export default function Options() {
  return (
    <>
        <div className={styles.main}>
            <div className="row">
                <div className={`${styles.background} ${styles.bg1} col l-6 m-6 c-12`}>
                    <div className={styles.orderNow}>
                        <div className={`${styles.heading} heading`}>Preorder now</div>
                        <a href="www.google.com" className={styles.link}>Get Started</a>
                    </div>
                </div>


                <div className={`${styles.background} ${styles.bg2} col l-6 m-6 c-12`}>
                    <div className={styles.orderNow}>
                        <div className={`${styles.heading} heading`}>Not ready? Keep up to date</div>
                        <a href="www.google.com" className={styles.link}>Register for Newsletter</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.waveWrap} wave-wrap z-5`}>
            <img className={`${styles.wave} max-w-none wave`} src={wave}  alt="" />
        </div>
    </>
  )
}
