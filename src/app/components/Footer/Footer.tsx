'use client';
import React, { useState } from 'react';
import styles from './Footer.module.css';
import { Clipboard, Check } from 'phosphor-react'; // Optional: icon library

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'joanna.olofsson@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className={styles.footer}>
      <h2 className={styles.footerHeading}>Joanna Olofsson</h2>
      <p>Elevator pitch</p>
      <div className={styles.content}>
        <div className={styles.emailWrapper}>
          <span className={styles.emailText}>{email}</span>
          <button className={styles.copyIcon} onClick={handleCopy} aria-label="Copy email">
            {copied ? <Check size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        <span>|</span>
        <p>Github knapp</p><span>|</span>
        <p>LinkedIn knapp</p><span>|</span>
      </div>
    </div>
  );
}

export default Footer;
