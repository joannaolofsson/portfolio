import React from 'react'
import styles from './HeroSection.module.css'
import PostCard from './PostCard'
import StampPicker from './StampPicker'

function HeroSection() {
  return (
    <div className={styles.container}>
        <div>    
            <h2 className={styles.heading}>Web for human behavior</h2>
            <h2>and digital experiences</h2>
        </div>
        <div>
            <PostCard />
           
        </div>
        <div> 
          <StampPicker />
        </div>
   
    </div>
  )
}

export default HeroSection

