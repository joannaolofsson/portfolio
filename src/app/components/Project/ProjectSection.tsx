'use client'
import React from 'react'
import styles from './ProjectSection.module.css';
import Card from '../shared/Card/Card';
import Image from 'next/image';
import { projectData } from './projectData';
import IconButton from '../shared/Button/IconButton';

export function ProjectsSection() {
  return (
    <div id='projectssection' className={styles.container}>
      <h3 className={styles.heading}>Project</h3>
      <div className={styles.cardsWrapper}>

        {projectData.map((project, index) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            githubUrl={project.githubUrl}  
            //blogUrl={project.blogUrl}
            readmeUrl={project.readmeUrl}          
            reversed={index === 1}
          />
        ))}
      </div>
      </div>
  )
}

export default ProjectsSection;

