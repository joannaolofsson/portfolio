'use client'
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ContactDrawer.module.css';
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button/Button';

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <Button
        onClick={() => setIsOpen(true)}
      >
        Contact Me
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className={styles.drawer}
              style={{
                bottom: isMobile ? 0 : undefined,
                top: isMobile ? undefined : 0,
                right: isMobile ? 0 : 0,
              }}
              initial={{ y: isMobile ? '100%' : 0, x: isMobile ? 0 : '100%' }}
              animate={{ y: 0, x: 0 }}
              exit={{ y: isMobile ? '100%' : 0, x: isMobile ? 0 : '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Get in touch</h2>
                <Button onClick={() => setIsOpen(false)}>✕</Button>
              </div>

              {/* Content */}
              <p>Use the form or reach out via LinkedIn or email.</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}
