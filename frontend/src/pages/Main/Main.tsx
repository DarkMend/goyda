import { useSelector } from 'react-redux'
import Title from '../../components/Title/Title'
import styles from './Main.module.css'
import { RootState } from '../../store/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'



export default function Main() {

    return (
        <div className={styles['main']}>
            <Title>Добпро епта</Title>
            <div>
                
            </div>
        </div>
    )
}