import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import styles from './Cart.module.css';
import { Minus, Plus, Trash } from 'lucide-react';
import cn from 'classnames'
import MainButton from '../../components/MainButton/MainButton';

export default function Cart() {
    return (
        <div className={styles['cart']}>
            <Title>Корзина</Title>
            <div className={styles['cart-wrapper']}>
                <div className={styles['cart-item']}>
                    <Link to='/product/2'>
                        <div className={styles['cart-item__title']}>
                            <div className={styles['cart-img']}>
                                <img src="/card1.jpg" alt="" />
                            </div>
                            <div className={styles['title']}>
                                Колонизаторы
                            </div>
                        </div>
                    </Link>
                    <div className={styles['cart-item__actions']}>
                        <button className={styles['delete']}>
                            <Trash className={styles['delete-icon']}/>
                        </button>
                        <div className={styles['calc']}>
                            <button className={cn(styles['calc-button'], styles['min'])}>
                                <Minus className={styles['calc-button__icon']}/>
                            </button>
                            <div className={styles['window']}>
                                1
                            </div>
                            <button className={cn(styles['calc-button'], styles['pls'])}>
                                <Plus className={cn(styles['calc-button__icon'])}/>
                            </button>
                        </div>
                    </div>

                </div>
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