import Sidebar from '../../components/Sidedar/Sidebar';
import styles from './MainLayout.module.css'
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className={styles['main-layout']}>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className={styles['page']}>
                <Outlet />
            </div>
        </div>
    )
}