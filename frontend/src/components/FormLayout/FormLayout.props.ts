import { ReactNode } from "react";

export interface IFormLayout {
    title: string,
    children: ReactNode,
    button: string,
    onSubmit: () => void,
    enctype?: boolean
}