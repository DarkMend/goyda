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
import { useEffect, useState } from 'react';

export default function Cart() {
    const [allPrice, setAllPrice] = useState(0);

    const { data, isLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: cartService.getCart,
        select: data => data?.data
    })

    // console.log(data?.data)

    useEffect(() => {
        let price = 0;

        const getAllPrice = () => {
            data?.data.map((el: ICartItem) => price += el.count > 1 ? el.count * el.product.price : el.product.price);
        }

        getAllPrice();

        setAllPrice(price);
    }, [data])

    return (
        <div className={styles['cart']}>
            <Title>Корзина</Title>
            {isLoading && <Loading />}
            <div className={styles['cart-wrapper']}>
                {
                    // user?.cart && user.cart.map((el: IProduct) => <CartItem key={el.id} product={el}/>)
                    data &&
                    data?.data.map((el: ICartItem) => <CartItem key={el.product.id} product={el.product} count={el.count} />)
                }
            </div>
            <div className={styles['result']}>
                <div className={styles['price']}>
                    Общая стоимость: { allPrice  }
                </div>
                <MainButton className={styles['result-button']}>Оформить заказ</MainButton>
            </div>
        </div>
    )
}