import { Outlet } from 'react-router-dom'
import styles from './AuthLayout.module.css'

export default function AuthLayout() {
    return (
        <div className={styles['auth']}>
            <Outlet />
        </div>
    )
}