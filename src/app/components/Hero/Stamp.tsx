// components/Stamp/Stamp.tsx
'use client';
import React, { useState } from 'react';
import styles from './Stamp.module.css';

type StampType = 'approved' | 'playful' | 'bold' | 'curious';

const STAMP_LABELS: Record<StampType, string> = {
  approved: 'Approved',
  playful: 'Yay!',
  bold: 'Stamped!',
  curious: 'Seen!',
};

const Stamp = () => {
  const [stamped, setStamped] = useState(false);
  const [type, setType] = useState<StampType>('approved');

  const handleStamp = () => {
    setStamped(true);
    setTimeout(() => setStamped(false), 600);
  };

  return (
    <div 
      className={`${styles.stamp} ${styles[type]} ${stamped ? styles.stamped : ''}`}
      onClick={handleStamp}
      title={`Click to stamp (${STAMP_LABELS[type]})`}
    >
      <span>{STAMP_LABELS[type]}</span>
      <select
        className={styles.selector}
        value={type}
        onChange={(e) => setType(e.target.value as StampType)}
      >
        <option value="approved">Approved</option>
        <option value="playful">Playful</option>
        <option value="bold">Bold</option>
        <option value="curious">Curious</option>
      </select>
    </div>
  );
};

export default Stamp;
