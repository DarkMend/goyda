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
import { useState } from 'react';
import cn from 'classnames';

export default function Catalog() {

    const dispatch = useDispatch();
    const state = useSelector<UserState>(selectUser);
    const user = state as UserState;
    
    const [category, setCategory] = useState<number | null>(null);

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: ProductService.getProducts,
        select: ({data}) => data.data
    });

    const openModal = () => {
        dispatch(modalActions.setIsActive(true));
    }

    const changeCategory = (categoryId: number | null) => {
        setCategory(categoryId);
    }

    const productsFiltered = data?.filter(el => category == null ? true : el.category == category);
    
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
                <button onClick={() => changeCategory(null)} className={cn({
                    [styles['active']]: category == null
                })}>Все</button>
                <button onClick={() => changeCategory(1)} className={cn({
                    [styles['active']]: category == 1
                })}>Стратегии</button>
                <button onClick={() => changeCategory(2)} className={cn({
                    [styles['active']]: category == 2
                })}>Карточные</button>
                <button onClick={() => changeCategory(3)} className={cn({
                    [styles['active']]: category == 3
                })}>Классические</button>
            </div>
            <div className={styles['catalog__wrapper']}>
                {
                    isLoading ? <Loading /> :
                        data?.length && productsFiltered?.map((el: IProduct) => <CardItem key={el.id} data={el} />)}
            </div>
        </div>
    )
}