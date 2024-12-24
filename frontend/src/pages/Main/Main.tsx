import Title from '../../components/Title/Title'
import styles from './Main.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../../index.css'

export default function Main() {

    return (
        <div className={styles['main']}>
            <Title>Добро пожаловать!</Title>
            <div className={styles['slider__wrapper']}>
                <Swiper
                    spaceBetween={50}
                    pagination={true} modules={[Pagination]}
                    className={styles['swiper']}
                >
                    <SwiperSlide className={styles['slider']}>
                        <img src="/slider/sl1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles['slider']}>
                        <img src="/slider/sl2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles['slider']}>
                        <img src="/slider/sl3.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}