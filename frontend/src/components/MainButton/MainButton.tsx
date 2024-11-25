import { IMainButton } from "./MainButton.props";
import styles from './MainButton.module.css';
import cn from 'classnames'
import { MoonLoader } from "react-spinners";

export default function MainButton({children, className, disabled = false, ...props}: IMainButton) {
    return (
        <button {...props} className={cn(styles['button'], className)} disabled={disabled}>
            {
            disabled ? <MoonLoader size={16} color='#fff'/> : 
            children
            }
        </button>
    )
}