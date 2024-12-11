import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../../components/Input/Input'
import styles from './Login.module.css'
import FormLayout from '../../components/FormLayout/FormLayout'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Toaster from '../../components/Toaster/Toaster'
import { useLoginUser } from '../../utils/hooks/User/useLoginUser'
import { toast } from 'react-toastify'
import { IUser } from '../../interfaces/user.interface'
import Cookies from 'js-cookie'

export default function Login() {

    const [activeInput, setActiveInput] = useState(false);
    // const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
        mode: 'onSubmit'
    });

    const { mutate, isPending } = useLoginUser({
        onSuccess(data) {
            Cookies.set('access_token', data.data.token as string, { sameSite: 'strict' });
            toast.success('Успешно', {
                autoClose: 2000
            });
            setTimeout(() => {
                document.location.href = '/'
            }, 2500)
        },
        onError(errors) {
            toast.error(errors.response?.data?.message, {
                autoClose: false
            });
        }
    })

    const onSubmit: SubmitHandler<IUser> = (data) => {
        mutate(data);
    }

    return (
        <div className={styles['auth-page']}>
            <Toaster />
            <FormLayout title='Авторизация' button='Войти' onSubmit={handleSubmit(onSubmit)} disabled={isPending}>
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