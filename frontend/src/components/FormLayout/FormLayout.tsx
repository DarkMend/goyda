import { IFormLayout } from "./FormLayout.props";
import styles from './FormLayout.module.css'
import MainButton from "../MainButton/MainButton";

export default function FormLayout({title, children, button, onSubmit, enctype, ...props}: IFormLayout) {


    return (
        <form onSubmit={onSubmit} {...props} encType={enctype ? 'multipart/form-data' : ''}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['form__wrapper']}>
                {children}
                <MainButton>{button}</MainButton>
            </div>
        </form>
    )
}