import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../../components/Input/Input'
import MainButton from '../../components/MainButton/MainButton'
import Title from '../../components/Title/Title'
import styles from './Login.module.css'
import { ILoginForm } from './LoginForm.interface'

export default function Login() {

    const {register, handleSubmit, formState} = useForm<ILoginForm>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data)
    }


    return (
        <div className={styles['auth-page']}>
            <Title>Авторизация</Title>
            <form className={styles['auth-form']} onSubmit={handleSubmit(onSubmit)}>
                <Input type='text' id='email' title='Email' {...register(
                    'email', {
                        required: 'Введите email', 
                    }
                )}/>
                {formState.errors['email']?.message}
                <Input type='password' id='password' title='Password' {...register('password', {
                    required: 'Введите пароль'
                })} />
                <MainButton>Войти</MainButton>
            </form>
        </div>
    )
}