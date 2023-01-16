import React from 'react'
import styles from './buy.module.scss'

export default function Buy() {
  return (
    <>
      <div className={`${styles.main} main`}>
        <div className='grid '>
          <div className='row center relative'>
            <div className='col l-4 z-10 pt60'>
                <div className='heading'>Pre-Order Now </div>
                <div className='text pt30'>We have spent months on research & development to bring you a hand sanitiser that smells amazing, while moisturising and protecting your skin. This is your opportunity to save on presale. Shipping September 2020.</div>
            </div>
            <div className='col l-2 m-12 z-10'>
              <div className='front-heading pt60'>Buy One</div>
              <div className='col item pt30'>
                <div className={styles.item}>
                  <div className={styles.itemPrice}>$65</div>
                  <div className={styles.itemQuantity}>For Five</div>
                </div>
              </div>
            </div>
            <div className='col l-6 m-12 z-10 pt60'>
              <div className='heading'>Pricing </div>
              <div className='front-heading pt60'>Bulk build and save</div>
              <div className='row'>
                <div className='col item l-4 m-4 c-6 s-12 pt60'>
                  <div className={styles.item}>
                    <div className={styles.itemPrice}>$35</div>
                    <div className={styles.itemQuantity}>For Two</div>
                  </div>
                  <div className={styles.priceSaving}>SAVE $5</div>
                </div>
                <div className={`${styles.floatOnPC} col item l-4 m-4 c-6 s-12 pt60`}>
                  <div className={styles.item}>
                    <div className={styles.itemPrice}>$65</div>
                    <div className={styles.itemQuantity}>For Five</div>
                  </div>
                  <div className={styles.priceSaving}>SAVE $35</div>
                </div>
                <div className='col item l-4 m-4 c-6 s-12 pt60'>
                  <div className={styles.item}>
                    <div className={styles.itemPrice}>$100</div>
                    <div className={styles.itemQuantity}>For Ten</div>
                  </div>
                  <div className={styles.priceSaving}>SAVE $50</div>
                </div>
                
                
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* <div className="wave-wrap waveImg notSetHeight">
        <img className="max-w-none wave" src={wave}  alt="" />
      </div> */}
      <div className={`${styles.waveImg} wave-wrap  max-w-none wave`}>
        
      </div>
    </>
  )
}
