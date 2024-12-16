import { Minus, Plus } from "lucide-react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";
import styles from './CartItem.module.css';
import cn from 'classnames';
import { ICartItem } from "./CartItem.props";
import { useUpdateCartCount } from "../../utils/hooks/Cart/useUpdateCartCount";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDeleteCart } from "../../utils/hooks/Cart/useDeleteCart";

export interface ICartCount {
    id: number,
    count: number
}

export default function CartItem({ product, count }: ICartItem) {

    const { mutate, isPending } = useUpdateCartCount();
    const queryClient = useQueryClient();

    const { mutate: deleteCartItem, isPending: isPendingDelete } = useDeleteCart();

    const deleteCart = async (id: number) => {
        deleteCartItem(id);
    }

    const updateCount = (data: ICartCount) => {
        mutate(data);
    }

    useEffect(() => {
        (isPendingDelete) ? '' : queryClient.invalidateQueries({queryKey: ['user']});
        (isPendingDelete) ? '' : queryClient.invalidateQueries({ queryKey: ['cart'] });
    }, [isPendingDelete])

    useEffect(() => {
        (isPending) ? '' : queryClient.invalidateQueries({ queryKey: ['cart'] });
    }, [isPending])

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
                <DeleteButton onClick={() => deleteCart(product?.id)} />
                <div className={styles['calc']}>
                    <button className={cn(styles['calc-button'], styles['min'], {
                        [styles['disabled']]: count == 1
                    })} disabled={count == 1 && true} onClick={() => updateCount({ id: product.id, count: count - 1 })}>
                        <Minus className={styles['calc-button__icon']} />
                    </button>
                    <div className={styles['window']}>
                        {count}
                    </div>
                    <button className={cn(styles['calc-button'], styles['pls'])} onClick={() => updateCount({ id: product.id, count: count + 1 })}>
                        <Plus className={cn(styles['calc-button__icon'])} />
                    </button>
                </div>
            </div>
        </div>
    )
}