import { useSelector } from 'react-redux'
import Title from '../../components/Title/Title'
import styles from './Main.module.css'
import { RootState } from '../../store/store'



export default function Main() {

    const state = useSelector<RootState>(state => state.user)

    console.log(state);
    return (
        <div className={styles['main']}>
            <Title>Добпро епта</Title>
            <div>

            </div>
        </div>
    )
}