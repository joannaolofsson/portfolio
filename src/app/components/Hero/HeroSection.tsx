'use client'
import React from 'react'
import styles from './HeroSection.module.css'
import PostCard from './PostCard'
import ContactDrawer from '../ContactDrawer/ContactDrawer'

function HeroSection() {

  return (
    <div className={styles.container}>
        <div className={styles.headingWrapper}>    
            <h1>Web for human behavior</h1>
            <h3>and digital experiences</h3>
        </div>
        <div className={styles.postcardWrapper}>
            <PostCard />
        </div>
    </div>
  )
}

export default HeroSection

