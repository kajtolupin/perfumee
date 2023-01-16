import React from 'react'
import { useRef,useLayoutEffect } from 'react'
import styles from './intro.module.scss'


export default function Intro() {

  const temRef = useRef(styles.temText)
  
  
  useLayoutEffect(() => { 
    temRef.current.innerHTML = 
    temRef.current.innerText.split("").map(
      (char, i) => (`<span style="transform:rotate(${i * 5.9}deg)">${char}</span>`)
    ).join("")
    
  })

  return (
    <div className={`${styles.main} main`}>
      <div className="grid wide wide-1k ">
        <div className={`${styles.introRow} row`}>
          <div className={`${styles.content} col l-6 m-12 c-12`}>
            <div className='heading'>
              Tough on germs, soft on skin.
            </div>
            <div className='text'>
              A travel-friendly, moisturizing hand sanitizer that gently purifies and disinfects skin on contact with natural ingredient scents.
            </div>
            <button className={`${styles.btn} btn`}>Learn More</button>
          </div>
          <div className={`${styles.art} col l-6 m-12 c-12`}>
            <img src={require('./img/CORAL-BOTTLE-02.png')}
              alt='' className={styles.bottle1}/>
            <img src={require('./img/CORAL-BOTTLE-01.png')}
              alt='' className={styles.bottle2}/>
            <div className={styles.tem}> {/* circle */}
              <p 
                ref={temRef}
                className={styles.temText}>PRE-ORDER & SAVE - SHIPING SEPT 2020</p>
            </div>
          </div>
          <img src={require('./img/purpleFlower.png')}
            alt='' 
            className={`${styles.cay} ${styles.tim}`}
          ></img>
          <img src={require('./img/choiCay.png')}
            alt='' 
            className={`${styles.cay} ${styles.choi}`}
          ></img>
          <img src={require('./img/canhCay.png')}
            alt='' 
            className={`${styles.cay} ${styles.canh}`}
          ></img>
        </div>


      </div>
      
    </div>
  )
}
