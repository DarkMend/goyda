import { IMainButton } from "./MainButton.props";
import styles from './MainButton.module.css';

export default function MainButton({children, ...props}: IMainButton) {
    return (
        <button {...props} className={styles['button']}>{children}</button>
    )
}