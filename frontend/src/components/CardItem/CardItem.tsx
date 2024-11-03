import { Link } from 'react-router-dom'
import CartButton from '../CartButton/CartButton'
import MainButton from '../MainButton/MainButton'
import styles from './CardItem.module.css'

export default function CardItem() {
    return (
        <div className={styles['card']}>
            <div className={styles['card-img']}>
                <img src="/card1.jpg" alt="" />
            </div>
            <div className={styles['title']}>
                Колонизаторы
            </div>
            <div className={styles['card-wrapper']}>
                <div className={styles['price']}>
                    3600 р.
                </div>
                <CartButton />
            </div>
            <Link to='/product/2'><MainButton>Подробнее</MainButton></Link>
        </div>
    )
}