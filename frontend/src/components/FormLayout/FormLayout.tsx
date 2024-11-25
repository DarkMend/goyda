import { IFormLayout } from "./FormLayout.props";
import styles from './FormLayout.module.css'
import MainButton from "../MainButton/MainButton";

export default function FormLayout({title, children, button, onSubmit, disabled, ...props}: IFormLayout) {


    return (
        <form onSubmit={onSubmit} {...props}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['form__wrapper']}>
                {children}
                <MainButton disabled={disabled}>{button}</MainButton>
            </div>
        </form>
    )
}