import React from 'react'
import styles from './order.module.scss'
import wave from './img/wave.svg'
import { useState } from 'react'


export default function Order() {

    const [item1, setItem1] = useState(5)
    const [item2, setItem2] = useState(5)


    const total = Number.parseInt(item1) + Number.parseInt(item2)
    const discount = Number.parseInt(-20)
 
  return (
    <>
        <div className={styles.main}>
            <div className='grid wide'>
                <div className='row center'>

                    <div className={`${styles.item} center col l-4 m-6 c-6`}>
                        <div className={styles.bottle}>
                            <img 
                                src={require('./img/CORAL-BOTTLE-02.png')} 
                                alt=''
                                className={styles.img}
                            />
                            <div className={styles.highlight}>
                            </div>
                        </div>
                        <div className={`${styles.name}`}>Peppermint & Eucalyptus </div>
                        <div className={styles.quantity}>
                            Qty
                            <input 
                                type='number'
                                className={styles.itemInput}  
                                // defaultValue='0'
                                value={item1}
                                onChange={e => setItem1(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className={`${styles.item} center col l-4 m-6 c-6`}>
                        <div className={styles.bottle}>
                            <img 
                                src={require('./img/CORAL-BOTTLE-01.png')} 
                                alt=''
                                className={styles.img}
                            />
                            <div 
                                className={styles.highlight}
                                style={{'backgroundColor': '#D0C1ED'}}
                            >
                            </div>
                        </div>
                        <div className={`${styles.name}`}>Lavender & Rosalina.</div>
                        <div className={styles.quantity}>
                            Qty
                            <input 
                                type='number'
                                className={styles.itemInput}  
                                // defaultValue='0'
                                value={item2}  
                                onChange={e => setItem2(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className={`${styles.item} center col l-4 m-12 c-12`}>

                        <div className={styles.payOrder}>
                            <div className={styles.payRow}>
                                <span>Quantity:</span>
                                <div className={styles.price}>
                                    <span>{total}</span>
                                </div>
                            </div>

                            <div className={styles.payRow}>
                                <span>Price:</span>
                                <div className={styles.price}>
                                    <span>{total*10}</span>
                                    $</div>
                            </div>

                            <div className={styles.payRow}>
                                <span>Pre-order discount:</span>
                                <div className={styles.price}>
                                    <span>{discount}</span>
                                    $</div>
                            </div>
                        </div>

                        <div className={styles.total}>
                            <span>Total:</span>
                            <div className={styles.price}>
                                <span>{total*10 + discount}</span>
                                $</div>
                        </div>

                        <button className={styles.btn}>Place Order</button>
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
