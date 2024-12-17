import OrderItem from "../../components/OrderItem/OrderItem";
import Title from "../../components/Title/Title";
import styles from './Orders.module.css'

export default function Orders() {
    return (
        <>
            <Title>Мои заказы</Title>
            <div className={styles['orders']}>
                <div className={styles['orders__wrapper']}>
                    <div className={styles['orders__wrapper-item']}>
                        <h3>В обработке</h3>
                        <div className={styles['orders-items']}>
                            <OrderItem />
                        </div>
                    </div>
                    <div className={styles['orders__wrapper-item']}>
                        <h3>В пути</h3>
                        <div className={styles['orders-items']}>
                            
                        </div>
                    </div>
                    <div className={styles['orders__wrapper-item']}>
                        <h3>Выдано</h3>
                        <div className={styles['orders-items']}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}