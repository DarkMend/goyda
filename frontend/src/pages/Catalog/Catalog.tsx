import { useQuery } from '@tanstack/react-query'
import CardItem from '../../components/CardItem/CardItem'
import Title from '../../components/Title/Title'
import styles from './Catalog.module.css'
import ProductService from '../../services/product.service';
import Loading from '../../components/Loading/Loading';

export default function Catalog() {

    const {data, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: ProductService.getProducts,
        select: (data) => data.data
    });

    return (
        <div className={styles['catalog']}>
            <Title>Каталог товаров</Title>
            <div className={styles['catalog__wrapper']}>
                {
                isLoading ? <Loading /> :
                data?.length && data.map((el:any) => <CardItem key={el.id} data={el}/>)}
            </div>
        </div>
    )
}