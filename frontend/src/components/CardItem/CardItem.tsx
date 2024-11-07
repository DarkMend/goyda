import { Link } from 'react-router-dom'
import CartButton from '../CartButton/CartButton'
import MainButton from '../MainButton/MainButton'
import styles from './CardItem.module.css'
import { ICatdItem } from './CardItem.props'

export default function CardItem({data}: ICatdItem) {
    return (
        <div className={styles['card']}>
            <div className={styles['card-img']}>
                <img src="/card1.jpg" alt="" />
            </div>
            <div className={styles['title']}>
                {data.name}
            </div>
            <div className={styles['card-wrapper']}>
                <div className={styles['price']}>
                    {data.price} р.
                </div>
                <CartButton />
            </div>
            <Link to={`/products/${data.id}`}><MainButton>Подробнее</MainButton></Link>
        </div>
    )
}