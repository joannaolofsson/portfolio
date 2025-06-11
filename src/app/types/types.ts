export type ButtonProps = { 
    variant?: "primary" | "secondary" | "drawer";
    children: React.ReactNode;
    onClick?: () => void;
}
