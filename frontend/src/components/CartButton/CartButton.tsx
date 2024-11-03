import { ShoppingBasket } from 'lucide-react'
import styles from './CartButton.module.css'

export default function CartButton() {
    return (
        <button className={styles['button']}>
            <ShoppingBasket className={styles['icon']} />
        </button>
    )
}