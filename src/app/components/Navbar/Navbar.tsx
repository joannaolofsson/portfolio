'use client'
import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <div className={`${styles.burger} ${isOpen ? styles.burger1Open : ''}`}></div>
        <div className={`${styles.burger} ${isOpen ? styles.burger2Open : ''}`}></div>
        <div className={`${styles.burger} ${isOpen ? styles.burger3Open : ''}`}></div>
      </div>

      <div className={styles.navItems}>
        <Link href="/" className={styles.logo}>Logo</Link>
          <ul className={`${styles.navLinks} ${isOpen ? styles.showMenuNav : styles.hideMenuNav}`}>
            <li><Link href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#project" className={styles.navLink} onClick={() => setIsOpen(false)}>Project</Link></li>
            <li><Link href="#cardsorting" className={styles.navLink} onClick={() => setIsOpen(false)}>Card Sorting</Link></li>
            <li><Link href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>Github</Link></li>
            <li><Link href="#" className={styles.navLink} onClick={() => setIsOpen(false)}>LinkedIn</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar

