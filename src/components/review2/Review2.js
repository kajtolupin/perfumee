import React from 'react'
import styles from './review2.module.scss'
import wave from './img/wave.svg'


export default function Review2() {
  return (
    <>
        <div className={`${styles.main} main`}>
            <div className='grid wide'>
                <div className='row center relative'>
                    <div className='col l-6 z-10'>
                        <img 
                            src={require('./img/spray2.png')} 
                            alt=''
                            className={`${styles.img} img`}
                        ></img>
                    </div> 
                    <div className='col l-6 z-10'>
                        <div className='heading'>Peppermint & Eucalyptus </div>
                        <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className='row pt30'>
                            <div className='col item l-4 m-4 c-6 pt30'>
                                <img 
                                src={require('./img/natural.png')} 
                                alt=''
                                className={`itemImg`}
                                ></img>
                                <div className='itemText'>
                                <h4>Natural Essential Oils</h4>
                                <p >Cleansed, refreshed</p>
                                </div>
                            </div>
                            <div className='col item l-4 m-4 c-6 pt30'>
                                <img 
                                src={require('./img/hand-sanitizer.png')} 
                                alt=''
                                className={`itemImg`}
                                ></img>
                            <div className='itemText'>
                                <h4>Ethyl Alcohol</h4>
                                <p >Cleansed, refreshed</p>
                            </div>
                            </div>
                            <div className='col item l-4 m-4 c-6 pt30'>
                                <img 
                                    src={require('./img/dropper.png')} 
                                    alt=''
                                    className={`itemImg`}
                                ></img>
                                <div className='itemText'>
                                    <h4>Glycerine</h4>
                                    <p >Cleansed, refreshed</p>
                                </div>
                            </div>
                        </div>
                        <button className={`${styles.btn} btn`}>Pre-Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="wave-wrap z-5">
            <img className="max-w-none wave" src={wave}  alt="" />
        </div>
    </>
  )
}
