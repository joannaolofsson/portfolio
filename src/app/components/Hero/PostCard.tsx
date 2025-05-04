import React from 'react'
import styles from './PostCard.module.css'

function PostCard() {
  return (
    <>
    <div className={styles.postcard}>
      <div className={styles.stampPlaceholder}></div>
      <h1 className={styles.addressRow}>Joanna Olofsson</h1>
      <h1 className={styles.addressRow}>Frontend deleloper &</h1>
      <h1 className={styles.addressRow}>UX designer</h1>
    </div>
    </>
  )
}

export default PostCard