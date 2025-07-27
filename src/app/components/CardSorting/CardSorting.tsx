'use client';
import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter, DragStartEvent, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import styles from './CardSorting.module.css';
import { CardDeckCard, initialCards } from './iconmap';
import { DraggableCard } from './DraggableCard';
import { DroppableZone } from './DroppableZone';
import { moveCardBetweenZones } from './logic';
import { div } from 'framer-motion/client';

export default function CardSorting() {
  const [hasMounted, setHasMounted] = useState(false);
  const [deck, setDeck] = useState(initialCards);
  const [activeCard, setActiveCard] = useState<CardDeckCard | null>(null);
  const [zones, setZones] = useState<Record<string, CardDeckCard[]>>({
    Me: [],
    Future: [],
    Maybe: [],
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // When dragging starts
  const handleDragStart = (event: DragStartEvent) => {
    const draggedId = event.active.id as string;

    // Look for the card in all locations
    let foundCard = deck.find((c) => c.id === draggedId);
    if (!foundCard) {
      for (const cards of Object.values(zones)) {
        const match = cards.find((c) => c.id === draggedId);
        if (match) {
          foundCard = match;
          break;
        }
      }
    }

    if (foundCard) {
      setActiveCard(foundCard);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedId = active.id as string;
    const zoneId = over.id as keyof typeof zones;

    // Look in deck
    let draggedCard = deck.find((card) => card.id === draggedId);

    // If not in deck, look in zones
    if (!draggedCard) {
      for (const cards of Object.values(zones)) {
        const found = cards.find((c) => c.id === draggedId);
        if (found) {
          draggedCard = found;
          break;
        }
      }
      setActiveCard(null); // Clear overlay
    }

    if (!draggedCard) return;

    // Remove from wherever it was
    setDeck((prev) => prev.filter((c) => c.id !== draggedId));
    setZones((prevZones) => {
      const updatedZones = { ...prevZones };

      for (const zone in updatedZones) {
        updatedZones[zone] = updatedZones[zone].filter((c) => c.id !== draggedId);
      }

      return moveCardBetweenZones(draggedCard!, zoneId, updatedZones);
    });
  };


  if (!hasMounted) return null;

  return (
    <div id="cardsorting" className={styles.container}>
      <h3 className={styles.heading}>Card Sorting</h3>
      <div className={styles.instruction}>
        <p>Place your cursor on a card</p>
        <p>Drag it to the area that best corresponds to how you view yourself</p> 
        <p>If you want to change your mind, just do it</p>
      <div className={styles.cardSortingContainer}>
      </div>
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <DragOverlay>
            {activeCard ? <DraggableCard card={activeCard} /> : null}
          </DragOverlay>

          <div className={styles.wrapper}>
            <div className={styles.cardDeck}>
              {deck.slice(0, 3).map((cardObj, index) => {
                const rotations = [-3, 2, -1, 1, -2, 3, -1, 2, -3, 0];
                const offsets = [2, 4, 6, 3, 5, 7, 4, 6, 8, 1];


                return (
                  <div
                    key={cardObj.id}
                    className={styles.cardStack}
                    style={{
                      transform: `rotate(${rotations[index % rotations.length]}deg) translateX(${offsets[index % offsets.length]}px)`,
                      zIndex: 20 - index,
                    }}
                  >
                    <DraggableCard card={cardObj} />
                  </div>
                );
              })}
            </div>

            <div className={styles.dropZoneWrapper}>
              {Object.entries(zones).map(([zone, cards]) => (
                <DroppableZone key={zone} id={zone}>
                  {cards.map((card) => (
                    <DraggableCard key={card.id} card={card} />
                  ))}
                </DroppableZone>
              ))}
            </div>
          </div>
        </DndContext>
      </div>
    </div>
  )
}
