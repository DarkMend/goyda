import { Link } from 'react-router-dom'
import CartButton from '../CartButton/CartButton'
import MainButton from '../MainButton/MainButton'
import styles from './CardItem.module.css'
import { ICatdItem } from './CardItem.props'
import { useSelector } from 'react-redux'
import { selectUser, UserState } from '../../store/userSlice'
import DeleteButton from '../DeleteButton/DeleteButton'
import { useDeleteCart } from '../../utils/hooks/Cart/useDeleteCart'
import { useQueryClient } from '@tanstack/react-query'
import { useAddCart } from '../../utils/hooks/Cart/useAddCart'
import { useEffect } from 'react'

export default function CardItem({data}: ICatdItem) {

    const state = useSelector<UserState>(selectUser);
    const {user} = state as UserState;
    const queryClient = useQueryClient();

    const { mutate, isPending } = useDeleteCart();

    const deleteCart = async (id: number) => {
        mutate(id);
    }

    const {mutate: addCartItem, isPending: isPendingAdd} = useAddCart();

    const addCart = async (id: number) => {
        addCartItem(id);
    }

    useEffect(() => {
        (isPending) ? '' : queryClient.invalidateQueries({queryKey: ['user']});
    }, [isPending])

    useEffect(() => {
        (isPendingAdd) ? '' : queryClient.invalidateQueries({queryKey: ['user']});
    }, [isPendingAdd])

    return (
        <div className={styles['card']}>
            <div className={styles['card-img']}>
                <img src={data.img} alt="" />
            </div>
            <div className={styles['title']}>
                {data.name}
            </div>
            <div className={styles['card-wrapper']}>
                <div className={styles['price']}>
                    {data.price} р.
                </div>
                {
                    user ? user.cart?.find((el) => el.id == data?.id) ? <DeleteButton onClick={() => deleteCart(data?.id)} /> : <CartButton onClick={() => addCart(data?.id)} /> : <CartButton /> 
                }
                
            </div>
            <Link to={`/products/${data.id}`}><MainButton>Подробнее</MainButton></Link>
        </div>
    )
}