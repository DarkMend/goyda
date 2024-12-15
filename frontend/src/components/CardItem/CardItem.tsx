import { Link } from 'react-router-dom'
import CartButton from '../CartButton/CartButton'
import MainButton from '../MainButton/MainButton'
import styles from './CardItem.module.css'
import { ICatdItem } from './CardItem.props'
import { useSelector } from 'react-redux'
import { selectUser, UserState } from '../../store/userSlice'

export default function CardItem({data}: ICatdItem) {

    const state = useSelector<UserState>(selectUser);
    const {user} = state as UserState;

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
                    user ? user.cart?.find((el) => el.id == data?.id) ? <div>хуй</div> : <CartButton /> : <CartButton /> 
                }
                
            </div>
            <Link to={`/products/${data.id}`}><MainButton>Подробнее</MainButton></Link>
        </div>
    )
}