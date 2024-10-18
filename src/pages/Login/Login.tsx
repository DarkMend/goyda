import Title from '../../components/Title/Title'
import styles from './Login.module.css'

export default function Login() {
    return (
        <div className={styles['auth-page']}>
            <Title>Авторизация</Title>
        </div>
    )
}