import { Link } from 'react-router-dom'
import styles from './OrderItem.module.css'
import { IProduct } from '../../interfaces/product.interface'
import { IOrderItem } from './OrderItem.props'



export default function OrderItem({data, ...props}: IOrderItem) {
    return (
        <div className={styles['oredrs-item']} {...props}>
            <div className={styles['orders-item__title']}>
                <p>Заказ: {data.orderId}</p>
                <p>Сумма: {data.amount}</p>
            </div>
            <Link to={`/orders/${data.orderId}`} className={styles['orders-item__products']}>
                <p>Товары</p>
                <div className={styles['orders-item__products-images']}>
                    {
                        data.products.map((el: IProduct) =>
                            (<div className={styles['img']} key={el.id}>
                                <img src={el.img} alt="" />
                            </div>)
                        )
                    }
                </div>
            </Link>
        </div>
    )
}