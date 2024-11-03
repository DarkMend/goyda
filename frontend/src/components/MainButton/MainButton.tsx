import { IMainButton } from "./MainButton.props";
import styles from './MainButton.module.css';
import cn from 'classnames'

export default function MainButton({children, className, ...props}: IMainButton) {
    return (
        <button {...props} className={cn(styles['button'], className)}>{children}</button>
    )
}