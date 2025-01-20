import { useQuery } from "@tanstack/react-query";
import OrderItem from "../../components/OrderItem/OrderItem";
import Title from "../../components/Title/Title";
import styles from './Orders.module.css'
import { orderService } from "../../services/order.service";
import { IOrder } from "../../interfaces/order.interface";
import Loading from "../../components/Loading/Loading";

export default function Orders() {

    const { data, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: () => orderService.getOrders(),
        select: (data) => data.data
    })

    return (
        <>
            <Title>Заказы</Title>
            {
                isLoading ? <Loading /> :

                    <div className={styles['orders']}>
                        <div className={styles['orders__wrapper']}>
                            <div className={styles['orders__wrapper-item']}>
                                <h3>В обработке</h3>
                                <div className={styles['orders-items']}>
                                    {
                                        data && data?.data.filter((el: IOrder) => el.status == 1).map((el: IOrder) => {
                                            return <OrderItem key={el.orderId} data={el} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles['orders__wrapper-item']}>
                                <h3>В пути</h3>
                                <div className={styles['orders-items']}>
                                    {
                                        data && data?.data.filter((el: IOrder) => el.status == 2).map((el: IOrder) => {
                                            return <OrderItem key={el.orderId} data={el} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles['orders__wrapper-item']}>
                                <h3>Выдано</h3>
                                <div className={styles['orders-items']}>
                                    {
                                        data && data?.data.filter((el: IOrder) => el.status == 3).map((el: IOrder) => {
                                            return <OrderItem key={el.orderId} data={el} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles['orders__wrapper-item']}>
                                <h3>Отказано</h3>
                                <div className={styles['orders-items']}>
                                    {
                                        data && data?.data.filter((el: IOrder) => el.status == 4).map((el: IOrder) => {
                                            return <OrderItem key={el.orderId} data={el} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}