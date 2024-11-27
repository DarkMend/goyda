import { Trash } from 'lucide-react'
import styles from './DeleteButton.module.css'
import IconButtonLayout from '../IconButtonLayout/IconButtonLayout'

export default function DeleteButton({...props}) {
    return (
        <IconButtonLayout className={styles['delete']} {...props}>
            <Trash className={styles['delete-icon']} />
        </IconButtonLayout>
    )
}