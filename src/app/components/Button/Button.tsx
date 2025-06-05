import styles from './Button.module.css';
import { ButtonProps } from '@/app/types/types';

export default function Button({variant="primary", children, onClick}: ButtonProps) {
    return (
        <button className={`{styles.button} ${styles[variant]}`} onClick={onClick}>{children}</button>
    )
}
