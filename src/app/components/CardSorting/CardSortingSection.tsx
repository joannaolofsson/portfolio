import React from 'react'
import styles from './CardSortingSection.module.css'

function CardSortingSection() {
  return (
    <div id='cardsorting' className={styles.cardSortingSection}>
        <div className={styles.cardSort}>
            <h2>Card sorting</h2>
        </div>
        <div className={styles.cardWrapper}>
                <p>Deck of cards</p>
            </div>
        <div className={styles.cardValue1}>
            <p>Very much according to my values</p>
            <div className={styles.placeCard}>Place card here</div>
        </div>
        <div className={styles.cardValue2}>
            <p>According to my values</p>
            <div className={styles.placeCard}>Place card here</div>
        </div>
        <div className={styles.cardValue3}>
            <p>Not inline with my values</p>
            <div className={styles.placeCard}>Place card here</div>
        </div>
        </div>
  )
}

export default CardSortingSection

