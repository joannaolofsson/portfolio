import React from 'react'
import styles from './PostCard.module.css'
import Stamp from './Stamp'

function PostCard() {
  return (
    <>
    <div className={styles.postcard}>
      <Stamp />
      <div className={styles.stampPlaceholder}></div>
      <h2 className={styles.addressRow}>Joanna Olofsson</h2>
      <h2 className={styles.addressRow}>Frontend deleloper &</h2>
      <h2 className={styles.addressRow}>UX designer</h2>
    </div>
    </>
  )
}

export default PostCard