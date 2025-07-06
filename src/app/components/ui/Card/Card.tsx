import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '@/app/types/types';
import Image from 'next/image';

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className={styles.cardImage}
        />
      )}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
