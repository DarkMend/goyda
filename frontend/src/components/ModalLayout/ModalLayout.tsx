import { createPortal } from 'react-dom';
import styles from './ModalLayout.module.css';
import { IModalLayout } from './ModalLayout.props';
import { X } from 'lucide-react';
import cn from 'classnames';
import { store } from '../../store/store';
import { useEffect } from 'react';

export default function ModalLayout({ children }: IModalLayout) {

    let isActive = store.getState().modal.isActive;

    useEffect(() => {store.subscribe(() => {
        isActive = store.getState().modal.isActive
    })}, [store.subscribe]);

    return createPortal(
        <div className={cn(styles['modal'], {
            [styles['active']]: isActive
        })}>
            <div className={styles['content']}>
                <div className={styles['close-wrapper']}>
                    <button className={styles['close']}>
                        <X />
                    </button>
                </div>
                <div className={styles['content-wrapper']}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}