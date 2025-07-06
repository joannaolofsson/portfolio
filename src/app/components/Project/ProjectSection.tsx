import React from 'react'
import styles from './ProjectSection.module.css';
import Card from '../ui/Card/Card';
import Image from 'next/image';

export function ProjectsSection() {
  return (
    <div id='projectssection' className={styles.container}>
      <h3 className={styles.heading}>Project</h3>
      <div className={styles.cardsWrapper}>
        <Card
          image="/confetti.png"
          title="Small win"
          description="By adding your small wins, you will both feel our win and get closer to your future self"
        />

        <Card
          image="/confetti.png"
          title="Blog"
          description="By adding your small wins, you will both feel our win and get closer to your future self"
        />

        <Card
          image="/confetti.png"
          title="Advice Generator"
          description="By adding your small wins, you will both feel our win and get closer to your future self"
        />

      </div>
    </div>
  )
}

export default ProjectsSection;
