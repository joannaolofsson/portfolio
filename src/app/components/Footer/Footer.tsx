import React from 'react'
import styles from './Footer.module.css'
// TODO Add copy paste to email not to use mailto
// TODO Add buttons for github and LinkedIn



function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.footerHeading}>Joanna Olofsson</h2>
      <p>Elevator pitch</p>
      <div className={styles.content}>
      <p>Email: joanna.olofsson@gmail.com</p><span>|</span> 
      <p>Github knapp</p><span>|</span>
      <p>LinkedIn knapp</p><span>|</span>
      </div>
    </div>
  )
}

export default Footer
