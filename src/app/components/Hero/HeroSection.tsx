import React from 'react'
import styles from './HeroSection.module.css'
import PostCard from './PostCard'
import Button from "../Button/Button"

function HeroSection() {
  return (
    <div className={styles.container}>
        <div className={styles.headingWrapper}>    
            <h2>Web for human behavior</h2>
            <h3>and digital experiences</h3>
            <Button variant="modaldrawer">Send  me a postcard</Button>
        </div>
        <div className={styles.postcardWrapper}>
            <PostCard />
        </div>
    </div>
  )
}

export default HeroSection

