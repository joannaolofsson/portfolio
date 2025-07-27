'use client';
import React, { useState } from 'react';
import styles from './Stamp.module.css';
import { StampType } from './PostCard';

type StampProps = {
  type: StampType;
  onStamp: () => void;
  stamped: boolean;
};

const STAMP_MESSAGES: Record<StampType, string> = {
  approved: "Your idea has been approved! ✅",
  playful: "That was fun! Let's do it again 🎉",
  bold: "Stamped with confidence 💪",
  curious: "Marked for further exploration 🤖",
};

export const Stamp = ({ type, onStamp, stamped }: StampProps) => {
  return (
    <div
      className={`${styles.stamp} ${stamped ? styles.stamped : ''}`}
      onClick={onStamp}
      title="Click to stamp"
    >
      <div className={`${styles.stampInner} ${styles[type]}`}>
        {STAMP_MESSAGES[type]}
      </div>
    </div>
  );
};

