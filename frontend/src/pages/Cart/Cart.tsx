import Title from '../../components/Title/Title';
import styles from './Cart.module.css';
import MainButton from '../../components/MainButton/MainButton';
import CartItem from '../../components/CartItem/CartItem';
// import { useSelector } from 'react-redux';
// import { selectUser, UserState } from '../../store/userSlice';
// import { IProduct } from '../../interfaces/product.interface';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import { ICartItem } from '../../components/CartItem/CartItem.props';
import { cartService } from '../../services/cart.service';

export default function Cart() {
    const {data, isLoading} = useQuery({
        queryKey: ['cart'],
        queryFn: cartService.getCart,
        select: data => data?.data
    })

    return (
        <div className={styles['cart']}>
            <Title>Корзина</Title>
            {isLoading && <Loading/> }  
            <div className={styles['cart-wrapper']}>
                {
                    // user?.cart && user.cart.map((el: IProduct) => <CartItem key={el.id} product={el}/>)
                    data && 
                    data?.data.map((el: ICartItem) => <CartItem key={el.product.id} product={el.product} count={el.count}/>)
                }
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