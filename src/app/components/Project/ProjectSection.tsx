import React from 'react'
import styles from './ProjectSection.module.css';
import Card from '../Card/Card';

function Project() {
  return (
    <div id='project' className={styles.container}>
      <h2 className={styles.heading}>Project</h2>
        <Card />
        <Card />
        <Card />
      </div>
  )
}

export default Project
