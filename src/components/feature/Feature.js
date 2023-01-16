import React from 'react'
import styles from './feature.module.scss'
import wave2 from './wave2.svg'


export default function Feature() {
  return (
    <div className={styles.main}>
      <div className={`${styles.featureHeading} heading`}>Features</div>
      <div className='grid wide'>
        <div className='row'>
          <div className={`${styles.item}  col l-2 m-4 c-6`}>
            <img 
              src={require('./img/wash-your-hands.png')} 
              alt=''
              className={styles.itemImg}
            ></img>
            <p className={`${styles.iItemText} text`}>Hydrating & Moisturising</p>
          </div>
          <div className={`${styles.item} col l-2 m-4 c-6`}>
            <img 
              src={require('./img/virus.png')} 
              alt=''
              className={styles.itemImg}
            ></img>
            <p className={`${styles.iItemText} text`}>Kills 99.99% of Germs</p>
          </div>
          <div className={`${styles.item} col l-2 m-4 c-6`}>
            <img 
              src={require('./img/essential-oil.png')} 
              alt=''
              className={styles.itemImg}
            ></img>
            <p className={`${styles.iItemText} text`}>Natural Ingredient Scents</p>
          </div>
          <div className={`${styles.item} col l-2 m-4 c-6`}>
            <img 
              src={require('./img/cleaning-spray.png')} 
              alt=''
              className={styles.itemImg}
            ></img>
            <p className={`${styles.iItemText} text`}>600+ Sprays</p>
          </div>
          <div className={`${styles.item} col l-2 m-4 c-6`}>
            <img 
              src={require('./img/foggy.png')} 
              alt=''
              className={styles.itemImg}
            ></img>
            <p className={`${styles.iItemText} text`}>Fine Mist</p>
          </div>
          <div className={`${styles.item} col l-2 m-4 c-6`}>
            <img 
              src={require('./img/australia.png')} 
              alt=''
              className={styles.itemImg}
            ></img>
            <p className={`${styles.iItemText} text`}>Australian Sourced Ingredients</p>
          </div>
          
        </div>

      </div>


      <div className="wave-wrap">
        <img className="max-w-none wave" src={wave2}  alt="" />
      </div>
    </div>
  )
}

