import Title from '../../components/Title/Title';
import styles from './Cart.module.css';
import MainButton from '../../components/MainButton/MainButton';
import CartItem from '../../components/CartItem/CartItem';

export default function Cart() {
    return (
        <div className={styles['cart']}>
            <Title>Корзина</Title>
            <div className={styles['cart-wrapper']}>
                <CartItem />
            </div>
            <div className={styles['result']}>
                <div className={styles['count']}>
                    Количество заказов
                </div>
                <div className={styles['price']}>
                    Общая стоимость
                </div>
                <MainButton className={styles['result-button']}>Оформить заказ</MainButton>
            </div>
        </div>
    )
}