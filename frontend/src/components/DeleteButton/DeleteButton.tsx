import { Trash } from 'lucide-react'
import styles from './DeleteButton.module.css'
import IconButtonLayout from '../IconButtonLayout/IconButtonLayout'
import { MoonLoader } from 'react-spinners'
import { IDeleteButton } from './DeleteButton.props'

export default function DeleteButton({ loading, ...props }: IDeleteButton) {
    return (
        <IconButtonLayout className={styles['delete']} {...props}>
            <div className={styles['icon__wrapper']}>
                {
                    loading ? <MoonLoader size={16} color='#fff' /> : <Trash className={styles['delete-icon']} />
                }
            </div>
        </IconButtonLayout>
    )
}