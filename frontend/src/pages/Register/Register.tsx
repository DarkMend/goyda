import { Link, useNavigate } from 'react-router-dom'
import FormLayout from '../../components/FormLayout/FormLayout'
import Input from '../../components/Input/Input'
import styles from './Register.module.css'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegForm } from './RegForm.interface'
import { useCreateUser } from '../../utils/hooks/User/useCreateUser'
import Toaster from '../../components/Toaster/Toaster'
import { toast } from 'react-toastify'

export default function Register() {
    const [activeInput, setActiveInput] = useState(false);
    const navigate = useNavigate();

    const { mutate, isPending } = useCreateUser({
        onSuccess() {
            toast.success('Успешно', {
                autoClose: 2000
            });
            setTimeout(() => {
                navigate('/auth/login');
            }, 2500)
        },
        onError(error) {
            toast.error(error.response?.data?.message);
        }
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IRegForm>({
        mode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<IRegForm> = (data) => {
        if (isPending) return
        mutate(data)
    }

    return (
        <div className={styles['auth-page']}>
            <Toaster />
            <FormLayout title='Регистрация' button='Зарегистрироваться' onSubmit={handleSubmit(onSubmit)}
            disabled={isPending}>
                <Input
                    title="Имя"
                    id="name"
                    {...register("name", {
                        required: "Заполните имя",
                    })}
                    errorActive={errors.name && errors.name.message}
                    activeInput={activeInput}
                />
                <Input
                    title="Email"
                    id="email"
                    {...register("email", {
                        required: "Заполните email",
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
                    type='password'
                    {...register("password", {
                        required: "Заполните пароль",
                    })}
                    errorActive={errors.password && errors.password.message}
                    activeInput={activeInput}
                />
            </FormLayout>
            <div className={styles['account']}>Есть аккаунт - <Link to={'/auth/login'}>Войти</Link></div>
        </div>
    )
}