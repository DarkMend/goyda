import { useQuery } from '@tanstack/react-query'
import CardItem from '../../components/CardItem/CardItem'
import Title from '../../components/Title/Title'
import styles from './Catalog.module.css'
import ProductService from '../../services/product.service';
import Loading from '../../components/Loading/Loading';
import AddButton from '../../components/AddButton/AddButton';
import AddProductModal from './AddProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal.slice';
import { IProduct } from '../../interfaces/product.interface';
import { selectUser, UserState } from '../../store/userSlice';

export default function Catalog() {

    const dispatch = useDispatch();
    const state = useSelector<UserState>(selectUser);
    const user = state as UserState;

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: ProductService.getProducts,
        select: ({data}) => data.data
    });

    const openModal = () => {
        dispatch(modalActions.setIsActive(true));
    }
    
    return (
        <div className={styles['catalog']}>
            <AddProductModal />
            <div className={styles['catalog-title']}>
                <Title>Каталог товаров</Title>
                {
                    user?.user?.role == 2 && <AddButton onClick={openModal} />
                }
            </div>
            <div className={styles['categories']}>
                <button>Все</button>
                <button>Карточные</button>
                <button>Кости</button>
                <button>Не кости</button>

            </div>
            <div className={styles['catalog__wrapper']}>
                {
                    isLoading ? <Loading /> :
                        data?.length && data.map((el: IProduct) => <CardItem key={el.id} data={el} />)}
            </div>
        </div>
    )
}