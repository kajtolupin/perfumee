import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <>
        <footer className={`${styles.main} center`}>
            <div className='heading'>Follow Us</div>
            <div className={`${styles.heading} heading`}>On Instagram</div>
            <div className={styles.img}></div>
            <div className={`${styles.social} social pt30`}>
                <div className='row'>
                    <div className={`${styles.socialItem} col l-3 m-3 c-6 text`}>Facebook</div>
                    <div className={`${styles.socialItem} col l-3 m-3 c-6 text`}>Product</div>
                    <div className={`${styles.socialItem} col l-3 m-3 c-6 text`}>Contact</div>
                    <div className={`${styles.socialItem} col l-3 m-3 c-6 text`}>Instagram</div>
                </div>
            </div>
        </footer>
    </>
  )
}
