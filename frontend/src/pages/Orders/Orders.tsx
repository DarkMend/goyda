import { useQuery } from "@tanstack/react-query";
import OrderItem from "../../components/OrderItem/OrderItem";
import Title from "../../components/Title/Title";
import styles from './Orders.module.css'
import { orderService } from "../../services/order.service";
import { IOrder } from "../../interfaces/order.interface";

export default function Orders() {

    const { data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => orderService.getOrders(),
        select: (data) => data.data
    })

    console.log(data?.data);

    return (
        <>
            <Title>Мои заказы</Title>
            <div className={styles['orders']}>
                <div className={styles['orders__wrapper']}>
                    <div className={styles['orders__wrapper-item']}>
                        <h3>В обработке</h3>
                        <div className={styles['orders-items']}>
                            {
                                data && data?.data.map((el: IOrder) => {
                                    return <OrderItem key={el.orderId} data={el} />
                                })
                            }
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