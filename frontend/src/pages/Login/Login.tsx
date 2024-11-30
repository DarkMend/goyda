import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../../components/Input/Input'
import styles from './Login.module.css'
import { ILoginForm } from './LoginForm.interface'
import FormLayout from '../../components/FormLayout/FormLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toaster from '../../components/Toaster/Toaster'

export default function Login() {

    const [activeInput, setActiveInput] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        mode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles['auth-page']}>
            <Toaster />
            <FormLayout title='Авторизация' button='Войти' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    title="Email"
                    id="email"
                    {...register("email", {
                        required: "Заполните название",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Некорректный email',
                        }
                    })}
                    errorActive={errors.email && errors.email.message}
                    activeInput={activeInput}
                />
                <Input
                    title="Пароль"
                    id="password"
                    {...register("password", {
                        required: "Заполните название",
                    })}
                    errorActive={errors.password && errors.password.message}
                    activeInput={activeInput}
                />
            </FormLayout>
            <div>Нет аккаунта - <Link to={'/auth/reg'}>Регистрация</Link></div>
        </div>
    )
}