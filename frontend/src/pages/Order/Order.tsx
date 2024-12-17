import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from './Order.module.css';

export default function Order() {
    return (
        <>
            <Title>Заказ: 1</Title>
            <div className={styles['order__wrapper']}>
                <h3>Товары</h3>
                <div className={styles['order__items']}>
                    <Link to={`/products/${114}`} className={styles['order__item']}>
                        <div className={styles['img']}>
                            <img src="http://127.0.0.1:8000/storage/products/qO8T8ZZXXdGR2z5BtwXf38woyuw6my3yQcaBq8Fn.png" alt="" />
                        </div>
                        <p>Название</p>
                    </Link>
                </div>
            </div>
        </>
    )
}