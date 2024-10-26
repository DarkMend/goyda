import styles from './Title.module.css'
import { ITitle } from './title.props'

export default function Title({children}: ITitle) {
    return (
        <h1 className={styles['title']}>
            {children}
        </h1>
    )
}