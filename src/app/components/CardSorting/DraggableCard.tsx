'use client';
import { useDraggable } from '@dnd-kit/core';
import styles from './DraggableCard.module.css';
import { CardDeckCard } from './iconmap';

export const DraggableCard = ({ card }: { card: CardDeckCard }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles.cardItem}
    >
      {card.icon} {card.id}
    </div>
  );
};
