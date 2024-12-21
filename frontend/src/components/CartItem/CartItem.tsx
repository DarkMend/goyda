import { Minus, Plus } from "lucide-react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";
import styles from './CartItem.module.css';
import cn from 'classnames';
import { ICartItem } from "./CartItem.props";
import { useUpdateCartCount } from "../../utils/hooks/Cart/useUpdateCartCount";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteCart } from "../../utils/hooks/Cart/useDeleteCart";
import { MoonLoader } from "react-spinners";

export interface ICartCount {
    id: number,
    count: number
}

export default function CartItem({ product, count }: ICartItem) {

    const { mutate, isPending: isPendingUpdate } = useUpdateCartCount({
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        }
    });
    const queryClient = useQueryClient();

    const { mutate: deleteCartItem, isPending } = useDeleteCart({
        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['user']});
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });

    const deleteCart = async (id: number) => {
        deleteCartItem(id);
    }

    const updateCount = (data: ICartCount) => {
        mutate(data);
    }

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
                <DeleteButton loading={isPending} onClick={() => deleteCart(product?.id)} />
                <div className={styles['calc']}>
                    <button className={cn(styles['calc-button'], styles['min'], {
                        [styles['disabled']]: count == 1
                    })} disabled={count == 1} onClick={() => updateCount({ id: product.id, count: count - 1 })}>
                        {
                            isPendingUpdate ? <MoonLoader size={16} color='#fff'/> : <Minus className={styles['calc-button__icon']} />
                        }
                    </button>
                    <div className={styles['window']}>
                        {count}
                    </div>
                    <button className={cn(styles['calc-button'], styles['pls'])} onClick={() => updateCount({ id: product.id, count: count + 1 })}>
                        {
                            isPendingUpdate ? <MoonLoader size={16} color='#fff'/> : <Plus className={cn(styles['calc-button__icon'])} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}