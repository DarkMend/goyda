import { ShoppingBasket } from 'lucide-react'
import styles from './CartButton.module.css'
import { ICartButton } from './CartButton.props'
import { MoonLoader } from 'react-spinners'

export default function CartButton({ loading, ...props }: ICartButton) {
    return (
        <button className={styles['button']} {...props}>
            <div className={styles['icon__wrapper']}>
                {
                    loading ? <MoonLoader size={16} color='#fff' /> : <ShoppingBasket className={styles['icon']} />
                }
            </div>
        </button>
    )
}