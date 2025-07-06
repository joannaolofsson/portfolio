
export type ButtonProps = { 
    variant?: "primary" | "secondary" | "drawer";
    children: React.ReactNode;
    onClick?: () => void;
}

export type CardProps = {
  title: string;
  description: string;
  image: string; // lowercase and no default value here
};


