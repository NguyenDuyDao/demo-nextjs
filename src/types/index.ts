export interface headerTitle {
    title: string;
}

export interface button {
    btnType?: "button" | "submit" | "reset" | undefined;
    text: string;
    onClickEvent?: () => void;
}