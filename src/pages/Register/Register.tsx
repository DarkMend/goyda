import Title from '../../components/Title/Title'
import styles from './Register.module.css'

export default function Register() {
    return (
        <div className={styles['auth-page']}>
            <Title>Регистрация</Title>
        </div>
    )
}