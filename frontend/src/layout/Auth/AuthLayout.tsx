import { Outlet } from 'react-router-dom'
import styles from './AuthLayout.module.css'

export default function AuthLayout() {
    return (
        <>
            <div className={styles['auth-layout']}>
                <div className={styles['video__wrapper']}>
                    <div className={styles['title']}>
                        <img src="/logo-auth.svg" alt="" />
                    </div>
                    <video className={styles['video']} muted autoPlay loop>
                        <source src='/vid1.mp4' />
                    </video>
                </div>
                <div className={styles['auth']}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}