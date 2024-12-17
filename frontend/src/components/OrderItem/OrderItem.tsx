import { Link } from 'react-router-dom'
import styles from './OrderItem.module.css'

export default function OrderItem() {
    return (
        <div className={styles['oredrs-item']}>
            <div className={styles['orders-item__title']}>
                <p>Заказ: 1</p>
                <p>Сумма: 4200</p>
            </div>
            <Link to={`/orders/${1}`} className={styles['orders-item__products']}>
                <p>Товары</p>
                <div className={styles['orders-item__products-images']}>
                    <div className={styles['img']}>
                        <img src="http://127.0.0.1:8000/storage/products/qO8T8ZZXXdGR2z5BtwXf38woyuw6my3yQcaBq8Fn.png" alt="" />
                    </div>
                    <div className={styles['img']}>
                        <img src="http://127.0.0.1:8000/storage/products/qO8T8ZZXXdGR2z5BtwXf38woyuw6my3yQcaBq8Fn.png" alt="" />
                    </div>
                    <div className={styles['img']}>
                        <img src="http://127.0.0.1:8000/storage/products/qO8T8ZZXXdGR2z5BtwXf38woyuw6my3yQcaBq8Fn.png" alt="" />
                    </div>
                    <div className={styles['img']}>
                        <img src="http://127.0.0.1:8000/storage/products/qO8T8ZZXXdGR2z5BtwXf38woyuw6my3yQcaBq8Fn.png" alt="" />
                    </div>
                </div>
            </Link>
        </div>
    )
}