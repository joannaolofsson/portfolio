import React from 'react'
import styles from './CardSortingSection.module.css'
import Card from '../Card/Card'

function CardSortingSection() {
  return (
    <div id='cardsorting' className={styles.container}>
        <h2>Card sorting</h2>
        <div className={styles.cardSort}>
            <div className={styles.cardWrapper}>
            <Card />
            </div>
            <div>
            <h3 className={styles.title}>Very much according to my values</h3>
        </div>
        <div>
            <h3 className={styles.title}>According to my values</h3>
        </div>
        <div>
            <h3 className={styles.title}>Not inline with my values</h3>
        </div>
        </div>
        </div>

  )
}

export default CardSortingSection

