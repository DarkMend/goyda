import { ButtonHTMLAttributes } from "react";

export interface ICartButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean
}