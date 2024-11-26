import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    type?: string,
    id?:string
    title?:string,
    value?:string,
    errorActive?: string,
    activeInput?: boolean
}