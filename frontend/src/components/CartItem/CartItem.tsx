import { Minus, Plus } from "lucide-react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";
import styles from './CartItem.module.css';
import cn from 'classnames';
import { ICartItem } from "./CartItem.props";

export default function CartItem({ product, count }: ICartItem) {
    return (
        <div className={styles['cart-item']}>
            <Link to={`/products/${product.id}`}>
                <div className={styles['cart-item__title']}>
                    <div className={styles['cart-img']}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={styles['title']}>
                        {product.name}
                    </div>
                </div>
            </Link>
            <div className={styles['cart-item__actions']}>
                <div className={styles['title']}>
                    {product.price} р.
                </div>
                <DeleteButton />
                <div className={styles['calc']}>
                    <button className={cn(styles['calc-button'], styles['min'])}>
                        <Minus className={styles['calc-button__icon']} />
                    </button>
                    <div className={styles['window']}>
                        {count}
                    </div>
                    <button className={cn(styles['calc-button'], styles['pls'])}>
                        <Plus className={cn(styles['calc-button__icon'])} />
                    </button>
                </div>
            </div>
        </div>
    )
}