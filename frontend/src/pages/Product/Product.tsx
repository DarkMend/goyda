import MainButton from '../../components/MainButton/MainButton'
import Title from '../../components/Title/Title'
import styles from './Product.module.css'

export default function Product() {
    return (
        <>
            <Title>Колонизаторы</Title>
            <div className={styles['product']}>
                <div className={styles['product-slider']}>
                    <div className={styles['product-img']}>
                        <img src="/card1.jpg" alt="" />
                    </div>
                </div>
                <div className={styles['product-info']}>
                    <div className={styles['title']}>
                        Колонизаторы
                    </div>
                    <div className={styles['description']}>
                        «Колонизаторы» (нем. Die Siedler von Catan) — немецкая настольная игра, созданная Клаусом Тойбером. Впервые издана в 1995 году в Германии.
                        Цель игры: освоить остров Катан, построив поселения, города и дороги. Побеждает тот, кто первым наберёт 10 очков.
                    </div>
                    <div className={styles['price']}>
                        32323 р.
                    </div>
                    <MainButton className={styles['button']}>В корзину</MainButton>
                </div>
            </div>
        </>
    )
}