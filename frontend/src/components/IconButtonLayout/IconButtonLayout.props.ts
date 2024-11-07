import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IIconButtonLayout extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?:string
}