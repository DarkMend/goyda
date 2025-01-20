import Title from '../../components/Title/Title';
import styles from './Cart.module.css';
import MainButton from '../../components/MainButton/MainButton';
import CartItem from '../../components/CartItem/CartItem';
// import { useSelector } from 'react-redux';
// import { selectUser, UserState } from '../../store/userSlice';
// import { IProduct } from '../../interfaces/product.interface';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import { ICartItem } from '../../components/CartItem/CartItem.props';
import { cartService } from '../../services/cart.service';
import { useEffect, useState } from 'react';
import { useAddOrder } from '../../utils/hooks/Order/useAddOrder';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const [allPrice, setAllPrice] = useState(0);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: cartService.getCart,
        select: data => data?.data
    })

    const { mutate, isPending } = useAddOrder({
        onSuccess() {
            navigate('/orders');
        }
    });

    // console.log(data?.data)

    useEffect(() => {
        let price = 0;

        const getAllPrice = () => {
            data?.data.map((el: ICartItem) => price += el.count > 1 ? el.count * el.product.price : el.product.price);
        }

        getAllPrice();

        setAllPrice(price);
    }, [data]);

    const addOrder = async () => {
        mutate(null);
        await queryClient.invalidateQueries({queryKey: 'user'});
    }

    return (
        <div className={styles['cart']}>
            <Title>Корзина</Title>
            {isLoading && <Loading />}
            {
                data?.data?.length == 0 && <div style={{ marginTop: '20px' }}>У вас нет товаров в корзине</div>
            }
            <div className={styles['cart-wrapper']}>
                {
                    // user?.cart && user.cart.map((el: IProduct) => <CartItem key={el.id} product={el}/>)
                    data &&
                    data?.data.map((el: ICartItem) => <CartItem key={el.product.id} product={el.product} count={el.count} />)
                }
            </div>
            {  
                isLoading ? '' :   
                data?.data.length == 0 ? '' :

                    <div className={styles['result']}>
                        <div className={styles['price']}>
                            Общая стоимость: {allPrice} руб.
                        </div>
                        <MainButton className={styles['result-button']} onClick={addOrder} disabled={isPending}>Оформить заказ</MainButton>
                    </div>
            }
        </div>
    )
}