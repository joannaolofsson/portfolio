import React from 'react'
import Button from '../Button/Button';
import styles from './StampPicker.module.css';

function StampPicker() {
  return (
    <>
    <div className={styles.stampWrapper}>
      <h3 className={styles.heading}>Select a stamp</h3>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    </>
  )
}

export default StampPicker;
