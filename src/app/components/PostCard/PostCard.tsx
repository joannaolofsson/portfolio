'use client';
import React, { useState } from 'react';
import styles from './PostCard.module.css';
import { Stamp } from './Stamp';

export type StampType = 'approved' | 'playful' | 'bold' | 'curious';

const STAMP_TYPES: StampType[] = ['approved', 'playful', 'bold', 'curious'];

export function PostCard() {
    const [type, setType] = useState<StampType>('approved');
    const [stamped, setStamped] = useState(false);

    const handleStamp = () => {
        setStamped(true);
        setTimeout(() => setStamped(false), 600);
    };

    return (
        <>
            <p className={styles.helperText}>
                Pick a stamp and stamp the postcard!
            </p>
            
            <div className={styles.controls}>
                {STAMP_TYPES.map((t) => (
                    <button
                        key={t}
                        className={`${styles.badge} ${type === t ? styles.active : ''}`}
                        onClick={() => setType(t)}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className={styles.postcardWrapper}>
                <div className={styles.postcard}>
                    <Stamp type={type} onStamp={handleStamp} stamped={stamped} />
                    <div className={styles.stampPlaceholder}></div>
                    <h2 className={styles.addressRow}>Joanna Olofsson</h2>
                    <h2 className={styles.addressRow}>Frontend developer &</h2>
                    <h2 className={styles.addressRow}>UX designer</h2>
                </div>
            </div>
        </>
    );
}

export default PostCard;
