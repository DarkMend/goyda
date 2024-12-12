import { Minus, Plus } from "lucide-react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";
import styles from './CartItem.module.css';
import cn from 'classnames';

export default function CartItem() {
    return (
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
                <DeleteButton />
                <div className={styles['calc']}>
                    <button className={cn(styles['calc-button'], styles['min'])}>
                        <Minus className={styles['calc-button__icon']} />
                    </button>
                    <div className={styles['window']}>
                        1
                    </div>
                    <button className={cn(styles['calc-button'], styles['pls'])}>
                        <Plus className={cn(styles['calc-button__icon'])} />
                    </button>
                </div>
            </div>
        </div>
    )
}