import React from 'react'
import styles from './AboutSection.module.css'

function AboutSection() {
  return (
    <div id='about' className={styles.container}>
        <div className={styles.aboutProfileImage}>Image</div>
        <div className={styles.aboutContent}>
            <h4>About me</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet suscipit cumque doloremque! Omnis, natus, 
                facere minus dicta voluptas illo impedit temporibus, at ratione quod nostrum dolor esse ad tempore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet suscipit cumque doloremque! Omnis, natus, 
                facere minus dicta voluptas illo impedit temporibus, at ratione quod nostrum dolor esse ad tempore.</p>
        </div>
    </div>
  )
}

export default AboutSection
