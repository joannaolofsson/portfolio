
'use client'
import { useState } from 'react';
import styles from './AboutSection.module.css';

type TapeItem = { icon: string; label: string; description: string };

const tapeData: TapeItem[] = [
  { icon: "💄", label: "Fashion-Forward", description: "I love styling interfaces—and outfits—with intention." },
  { icon: "🎮", label: "Gamified Mindset", description: "I design with dopamine in mind—small wins, big impact." },
  { icon: "🛠", label: "Workshop Junkie", description: "I thrive in collaborative sprints and sticky-note storms." },
  { icon: "🧠", label: "Creative Hacker", description: "I experiment with life like it’s a UX prototype." },
];

export const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="aboutsection" className={styles.aboutContainer}>
      <div className={styles.inner}>
        <div
          className={styles.tape}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <h3 className={styles.heading}>About me</h3>
          {expanded && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque eum quia vel, explicabo illum rem reiciendis nam excepturi.
            </p>
          )}
          {tapeData.map(({ icon, label, description }, index) => (
            <span key={label} className={styles.badgeWrapper}>
              <span className={styles.badge}>
                {icon} {label}
                {index < tapeData.length - 1 && <span className={styles.separator}>|</span>}
              </span>
              <span className={styles.tooltip}>{description}</span>
            </span>
          ))}
        </div>
      </div>
    </section>

  );
};


