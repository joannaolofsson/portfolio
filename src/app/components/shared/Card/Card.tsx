'use client';
import React, { useState } from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import IconButton from '../Button/IconButton';
import { RiArticleFill, RiGithubFill } from "react-icons/ri";

type CardProps = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  blogUrl?: string;
  readmeUrl?: string;
  reversed?: boolean;
};

export default function Card({
  title,
  description,
  image,
  githubUrl,
  blogUrl,
  reversed,
  readmeUrl
}: CardProps) {

  return (
    <div className={`${styles.cardContainer} ${reversed ? styles.reversed : ''}`}>
      <Image src={image} alt={title} width={300} height={200} className={styles.cardImage} />

      <div className={styles.cardText}>
        <h4>{title}</h4>
        <p>{description}</p>

        <div className={styles.buttonRow}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <IconButton label="GitHub Repo" icon={<RiGithubFill />} />
            </a>
          )}
          {blogUrl && (
            <a href={blogUrl} target="_blank" rel="noopener noreferrer">
              <IconButton label="Blog Post" icon={<RiArticleFill />} />
            </a>
          )}
          {!blogUrl && readmeUrl && (
            <a href={readmeUrl} target="_blank" rel="noopener noreferrer">
              <IconButton label="README.md" icon={<RiArticleFill />} />
            </a>
          )}
        </div>

      </div>
    </div>

  );
}
