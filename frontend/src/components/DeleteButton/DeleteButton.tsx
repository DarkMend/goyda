import { Trash } from 'lucide-react'
import styles from './DeleteButton.module.css'
import IconButtonLayout from '../IconButtonLayout/IconButtonLayout'

export default function DeleteButton() {
    return (
        <IconButtonLayout className={styles['delete']}>
            <Trash className={styles['delete-icon']} />
        </IconButtonLayout>
    )
}