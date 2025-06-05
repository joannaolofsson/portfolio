export type ButtonProps = { 
    variant?: "primary" | "secondary" | "modaldrawer";
    children: React.ReactNode;
    onClick?: () => void;
}