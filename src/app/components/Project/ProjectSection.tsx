import React from 'react'
import styles from './ProjectSection.module.css';
import Card from '../ui/Card/Card';

function Project() {
  return (
    <div id='project' className={styles.container}>
      <h3 className={styles.heading}>Project</h3>
        <Card />
        <Card />
        <Card />
      </div>
  )
}

export default Project
