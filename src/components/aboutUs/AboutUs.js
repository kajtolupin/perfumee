import React from 'react'
import styles from './aboutUs.module.scss'
import wave from './img/wave.svg'


export default function AboutUs() {
  return (
    <>
      <div className={`${styles.main} main`}>
        <div className='grid wide'>
          <div className='row center relative reverse'>
            <div className='col l-7 l-o-3 z-10'>
              <div className='front-heading'>ABOUT US</div>
              <div className='heading'>Made for you from natural and local ingredents</div>
              <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              {/* <div className='row pt30'>
                
              </div> */}
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
