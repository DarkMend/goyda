import { ButtonHTMLAttributes } from "react";

export interface IDeleteButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading: boolean
}