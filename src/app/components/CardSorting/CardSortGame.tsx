'use client';

import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
  DragEndEvent,
} from '@dnd-kit/core';
import styles from './CardSortGame.module.css';
import { initialCards } from './cardStack';

const DraggableCard = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      className={styles.cardItem}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      {id}
    </div>
  );
};

const DroppableZone = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      className={styles.dropZone}
      ref={setNodeRef}
      style={{ background: isOver ? '#e0f7fa' : undefined }}
    >
      <div className={styles.dropZoneTitle}>{id}</div>
      {children}
    </div>
  );
};

export default function CardSortGame() {
  const [hasMounted, setHasMounted] = useState(false);
  const [deck, setDeck] = useState(initialCards);
  const [zones, setZones] = useState<Record<string, string[]>>({
    Me: [],
    Maybe: [],
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedCard = active.id as string;
    const zoneId = over.id as keyof typeof zones;

    setDeck((prev) => prev.slice(1));
    setZones((prev) => ({
      ...prev,
      [zoneId]: [...prev[zoneId], draggedCard],
    }));
  };

  if (!hasMounted) return null;

  return (
  <div className={styles.cardSortingContainer}>
  <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

    <h2>Card Sorting</h2>
    <div className={styles.wrapper}>
      <div className={styles.cardDeck}>
        {deck.map((card, index) => {
          const rotations = [-3, 2, -1, 1, -2, 3, -1, 2, -3, 0]; // Expand rotation options
          const offsets = [2, 4, 6, 3, 5, 7, 4, 6, 8, 1]; // Expand offset options

          return (
           <div
      key={card}
      className={styles.cardStack}
      style={{
        transform: `rotate(${rotations[index % rotations.length]}deg) translateY(${offsets[index % offsets.length]}px)`,
        zIndex: 20 - index,
      }}
    >
              {index === 0 ? (
                <DraggableCard id={card} />
              ) : (
                <div className={styles.cardItem}>{card}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Drop zones section */}
      <div className={styles.dropZoneWrapper}>
        {Object.entries(zones).map(([zone, cards]) => (
          <DroppableZone key={zone} id={zone}>
            {cards.map((card) => (
              <div key={card} className={styles.cardThumbnail}>
                {card}
              </div>
            ))}
          </DroppableZone>
        ))}
      </div>
        </div>

  </DndContext>
      </div>
);

}
