import styles from './IconButton.module.css';
import React from 'react'

type IconButtonProps = {
  icon: React.ReactNode;
  label?: string;
  ariaLabel?: string;
  variant?: "primary" | "ghost" | "danger" | "text";
  size?: "sizeSm" | "sizeMd" | "sizeLg";
  radius?: "radiusNone" | "radiusSm" | "radiusMd" | "RadiusLg";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function IconButton({
  icon,
  label,
  ariaLabel,
  variant = "primary",
  size = "sizeMd",
  children,
  radius = "radiusMd",
  onClick,
  disabled,
}: IconButtonProps) {
  const isIconOnly = !label && !children;
  const baseClass = styles.button;
  const iconOnlyClass = isIconOnly ? styles.isIconOnly : styles.isWithLabel;
  const sizeClass = styles[size];
  const radiusClass = styles[radius]; 

  return (
    <button
      type="button"
      className={`
        ${baseClass}
        ${styles[variant]}
        ${sizeClass}
        ${radiusClass}
        ${iconOnlyClass}
      `}

      aria-label={ariaLabel ?? label}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label && <span className={styles.label}>{label}</span>}
    </button>

  );
}
