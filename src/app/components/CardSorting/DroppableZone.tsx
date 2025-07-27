import styles from './DroppableZone.module.css';
import { useDroppable } from '@dnd-kit/core';

export const DroppableZone = ({ id, children }: { id: string; children: React.ReactNode }) => {
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