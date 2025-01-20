import { Link } from 'react-router-dom'
import styles from './OrderItem.module.css'
import { IProduct } from '../../interfaces/product.interface'
import { IOrderItem } from './OrderItem.props'
import { useSelector } from 'react-redux'
import { selectUser, UserState } from '../../store/userSlice'
import { MoveRight, X } from 'lucide-react'
import { useMoveOrder } from '../../utils/hooks/Admin/useMoveOrder'
import { useQueryClient } from '@tanstack/react-query'
import { useOrderClose } from '../../utils/hooks/Admin/useOrderClose'


export default function OrderItem({ data, ...props }: IOrderItem) {

    const state = useSelector<UserState>(selectUser);
    const { user } = state as UserState;
    const queryClient = useQueryClient();

    const { mutate } = useMoveOrder({
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
        }
    });

    const { mutate: closeOrderMutate } = useOrderClose({
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
        }
    })

    const moveOrder = (id: number) => {
        mutate(id);
    }

    const orderClose = (id: number) => {
        closeOrderMutate(id);
    }

    return (
        <div className={styles['oredrs-item']} {...props}>
            <div className={styles['orders-item__title']}>
                <p>Заказ: {data.orderId}</p>
                <p>Сумма: {data.amount} руб.</p>
            </div>
            {
                user?.role == 2 &&
                <>
                    ID пользователя: {data.userId}
                </>
            }
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
            {
                user?.role == 2 && data.status != 3 && data.status != 4 &&
                <div className={styles['buttons']}>
                    {data.status != 2 && <button className={styles['button-img']} onClick={() => orderClose(data.orderId)} ><X /></button>}
                    <button className={styles['button-img']} onClick={() => moveOrder(data.orderId)}>
                        <MoveRight />
                    </button>
                </div>

            }
        </div>
    )
}