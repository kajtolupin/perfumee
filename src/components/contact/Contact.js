import React from 'react'
import styles from './contact.module.scss'
import wave from './img/wave.svg'
import Validator from './validator2'
import { useEffect } from 'react'

export default function Contact() {

  useEffect(() => {
    Validator({
      form: '#contact',
      formGroupSelector: '.form-class',
      errorSelector: '.form-message',
      rules: [
        Validator.isRequired('#firstName'),
        Validator.isRequired('#lastName'),
        Validator.isEmail('#email'),
      ]
    })
  })

  return (
    <>
        <div className={`${styles.main} main`}>
        <div className='grid wide'>
          <div className='row center relative'>
            <div className={`${styles.contactText} col l-6 c-12 z-10`}>
              <div className='heading'>Got a question? get in touch. </div>
              <div className={`${styles.text} text`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
              <span className={styles.textEdge}>contact us</span>
            </div>
            <form action='' method='POST' id='contact' className={`${styles.contactSheet} col l-6 c-12 z-10`}>

              <div className='row'>
                <div className='col l-6 m-6 c-12 form-class'>
                    <input type='text' id='firstName' name='firstName' className={`${styles.input}`} placeholder='First Name'></input>
                    <span className='form-message'></span>
                </div>
                <div className='col l-6 m-6 c-12 form-class'>
                    <input type='text' id='lastName' className={`${styles.input}`} placeholder='Last Name'></input>
                    <span className='form-message'></span>
                </div>
              </div>
              <div className='form-class'>
                <input type='email' id='email' className={`${styles.input} `} placeholder='Email'></input>
                <span className='form-message'></span>
              </div>
              <div>
                <select id={styles.selection} className={`${styles.input} `}>
                        <option value="volvo" >-- Please Select --</option>
                        <option value="opel">Peppermint & Eucalyptus </option>
                        <option value="audi">Lavender & Rosalina.</option>
                </select>
              </div>
              <textarea id="message-text" className={styles.input} placeholder="Message" name="message" cols="20" rows="8"></textarea>
              <button className={`${styles.btn} btn`}>Submit</button>

            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.waveWrap} wave-wrap z-5`}>
          <img className={`${styles.wave} max-w-none wave`} src={wave}  alt="" />
      </div>

    </>
  )
}
