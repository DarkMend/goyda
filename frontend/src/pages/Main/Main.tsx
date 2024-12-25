import Title from '../../components/Title/Title'
import styles from './Main.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../../index.css'
import cn from 'classnames'

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
                    <SwiperSlide className={cn(styles['slider'], styles['sl1'])}>
                        <div className={styles['slider__inside']}>
                            <div className={styles['img']}>
                                <img src="/slider/sl1.png" alt="" />
                            </div>
                            <h3 className={styles['h3']}>
                                ИНТЕРЕСНЫ КАРЛИКИ И ДРАКОНЫ?
                                ТОГДА ЭТО ДЛЯ ТЕБЯ
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cn(styles['slider'], styles['sl2'])}>
                        <div className={cn(styles['slider__inside'], styles['slider__inside-sl2'])}>
                            <div className={styles['img']}>
                                <img src="/slider/sl2.png" alt="" />
                            </div>
                            <h3 className={styles['h3']}>
                                ХОЧЕШЬ ПОБЫВАТЬ БРИТАНСКИМ КОЛОНИЗАТОРОМ?
                            </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}