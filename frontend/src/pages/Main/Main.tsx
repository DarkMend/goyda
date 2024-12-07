import { useQuery } from '@tanstack/react-query'
import Title from '../../components/Title/Title'
import styles from './Main.module.css'
import { axiosWithAuth } from '../../api/interceptors'



export default function Main() {

    const {data} = useQuery({
        queryKey: ['token'],
        queryFn: () => axiosWithAuth.get(`/token`)
    })

    return (
        <div className={styles['main']}>
            <Title>Добпро епта</Title>
            <div>{data?.data.id}</div>
        </div>
    )
}