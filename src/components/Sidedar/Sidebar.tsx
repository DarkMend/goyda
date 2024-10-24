import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import { CircleUserRound, House, MoveHorizontal, ShoppingBasket, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Sidebar() {

    let a;
    let value = localStorage.getItem('isActiveSidebar');
    if (!value) {
        a = false;
    }
    else {
        a = JSON.parse(value);
    }

    const [isActiveSidebar, setIsActiveSidebar] = useState<boolean>(a);

    useEffect(() => {
        const value = localStorage.getItem('isActiveSidebar');
        if (!value) {
            return
        }
        setIsActiveSidebar(JSON.parse(value));
    }, [isActiveSidebar])

    function menuTurn() {
        setIsActiveSidebar(!isActiveSidebar);
        localStorage.setItem('isActiveSidebar', JSON.stringify(!isActiveSidebar));
    }

    return (
        <div className={cn(styles['sidebar'], {
            [styles['sidebar-inactive']]: isActiveSidebar
        })}>
            <div className={styles['sidebar__wrapper']}>

                <div className={styles['head-logo']}>
                    <div className={styles['logo']}>
                        <img src="/logo.svg" alt="" />
                    </div>
                    <p>GameShop</p>
                </div>
                <div className={styles['menu']}>
                    <NavLink to='/auth/login' className={styles['menu__href']}>
                        {
                            ({ isActive }) => (
                                <div className={cn(styles['menu__item'], {
                                    [styles['active']]: isActive
                                })}>
                                    <div className={styles['menu-icon']}>
                                        <CircleUserRound className={styles['icon']} />
                                    </div>
                                    <p>
                                        Вход
                                    </p>
                                </div>
                            )
                        }
                    </NavLink>
                    <div className={styles['line']}></div>
                    <NavLink to='/' className={styles['menu__href']}>
                        {
                            ({ isActive }) => (
                                <div className={cn(styles['menu__item'], {
                                    [styles['active']]: isActive
                                })}>
                                    <div className={styles['menu-icon']}>
                                        <House className={styles['icon']} />
                                    </div>
                                    <p>
                                        Главная
                                    </p>
                                </div>
                            )
                        }
                    </NavLink>
                    <NavLink to='/catalog' className={styles['menu__href']}>
                        {
                            ({ isActive }) => (
                                <div className={cn(styles['menu__item'], {
                                    [styles['active']]: isActive
                                })}>
                                    <div className={styles['menu-icon']}>
                                        <ShoppingCart className={styles['icon']} />
                                    </div>
                                    <p>
                                        Каталог
                                    </p>
                                </div>
                            )
                        }
                    </NavLink>
                    <NavLink to='/cart' className={styles['menu__href']}>
                        <div className={styles['menu__item']}>
                            <div className={styles['menu-icon']}>
                                <ShoppingBasket className={styles['icon']} />
                            </div>
                            <p>
                                Корзина
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className={styles['turn']} onClick={menuTurn}>
                <MoveHorizontal className={styles['turn-button']} />
            </div>
        </div>
    )
}