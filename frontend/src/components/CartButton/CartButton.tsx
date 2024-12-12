import { ShoppingBasket } from 'lucide-react'
import styles from './CartButton.module.css'

export default function CartButton({...props}) {
    return (
        <button className={styles['button']} {...props}>
            <ShoppingBasket className={styles['icon']} />
        </button>
    )
}