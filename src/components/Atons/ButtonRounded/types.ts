export interface IButtonRoundedProps {
    label: string;
    color: "red" | "blue" | "green" | "yellow" | "pink" | "indigo" | "teal";
    disabled?: boolean;
    transparent?: boolean;
    action: actions;
}

export type actions = "submit" | "click" | "log";