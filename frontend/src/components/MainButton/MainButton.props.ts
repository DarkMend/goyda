import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IMainButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    className?: string
    disabled?:boolean
}