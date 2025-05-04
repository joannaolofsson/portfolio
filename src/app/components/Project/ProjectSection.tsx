import React from 'react'
import styles from './ProjectSection.module.css';
import Card from '../Card/Card';

function Project() {
  return (
    <div id='project' className={styles.container}>
      <h2>Project</h2>
      <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default Project
