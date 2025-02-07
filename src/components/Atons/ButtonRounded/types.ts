export interface IButtonRoundedProps {
    label: string;
    color: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
    disabled?: boolean;
    transparent?: boolean;
    action: actions;
    fnClick?: () => void;
}

export type actions = "submit" | "click" | "log";