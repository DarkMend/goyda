import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import styles from './Login.module.css'

export default function Login() {

    return (
        <div className={styles['auth-page']}>
            <Title>Авторизация</Title>
            <form className={styles['auth-form']}>
                <Input type='text' id='email' title='Email' />
            </form>
        </div>
    )
}