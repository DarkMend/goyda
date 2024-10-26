import Title from '../../components/Title/Title'
import styles from './Catalog.module.css'

export default function Catalog() {
    return (
        <div className={styles['catalog']}>
            <Title>Каталог товаров</Title>
            <div className={styles['catalog__wrapper']}>
                <div className={styles['product-card']}>
                    Название продукта
                </div>
                <div className={styles['product-card']}>
                    Название продукта
                </div>
                <div className={styles['product-card']}>
                    Название продукта
                </div>
                <div className={styles['product-card']}>
                    Название продукта
                </div>
                <div className={styles['product-card']}>
                    Название продукта
                </div>
                <div className={styles['product-card']}>
                    Название продукта
                </div>
                
            </div>
        </div>
    )
}