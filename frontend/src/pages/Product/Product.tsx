import { useQuery } from '@tanstack/react-query'
import MainButton from '../../components/MainButton/MainButton'
import Title from '../../components/Title/Title'
import styles from './Product.module.css'
import { useParams } from 'react-router-dom'
import ProductService from '../../services/product.service'
import Loading from '../../components/Loading/Loading'
import DeleteButton from '../../components/DeleteButton/DeleteButton'
import EditButton from '../../components/EditButton/EditButton'

export default function Product() {

    const { productId } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ['products', productId],
        queryFn: () => ProductService.getProduct(productId),
        select: (data) => data.data
    })


    return (
        <>
            {
                isLoading ? <Loading /> :
                    <div>
                        <div className={styles['title-wrapper']}>
                            <Title>{data?.name}</Title>
                            <div className={styles['admin-actions']}>
                                <DeleteButton />
                                <EditButton />
                            </div>
                        </div>
                        <div className={styles['product']}>
                            <div className={styles['product-slider']}>
                                <div className={styles['product-img']}>
                                    <img src="/card1.jpg" alt="" />
                                </div>
                            </div>
                            <div className={styles['product-info']}>
                                <div className={styles['title']}>
                                    {data?.name}
                                </div>
                                <div className={styles['description']}>
                                    {data?.description}
                                </div>
                                <div className={styles['price']}>
                                    {data?.price} р.
                                </div>
                                <MainButton className={styles['button']}>В корзину</MainButton>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}