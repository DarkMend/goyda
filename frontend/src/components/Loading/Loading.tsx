import { ClipLoader } from 'react-spinners'
import styles from './Lading.module.css'

export default function Loading() {
    return (
        <div className={styles['loading']}>
            <ClipLoader
                color="#ffc400"
                loading
                size={35}
                speedMultiplier={2}
            />
        </div>
    )
}