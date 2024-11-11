import { useQuery } from '@tanstack/react-query'
import CardItem from '../../components/CardItem/CardItem'
import Title from '../../components/Title/Title'
import styles from './Catalog.module.css'
import ProductService from '../../services/product.service';
import Loading from '../../components/Loading/Loading';
import AddButton from '../../components/AddButton/AddButton';
import AddProductModal from './AddProductModal';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal.slice';

export default function Catalog() {

    const dispatch = useDispatch();

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: ProductService.getProducts,
        select: (data) => data.data
    });

    const openModal = () => {
        dispatch(modalActions.setIsActive(true));
    }
    
    return (
        <div className={styles['catalog']}>
            <AddProductModal />
            <div className={styles['catalog-title']}>
                <Title>Каталог товаров</Title>
                <AddButton onClick={openModal} />
            </div>
            <div className={styles['catalog__wrapper']}>
                {
                    isLoading ? <Loading /> :
                        data?.length && data.map((el: any) => <CardItem key={el.id} data={el} />)}
            </div>
        </div>
    )
}