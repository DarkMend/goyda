import { createPortal } from 'react-dom';
import styles from './ModalLayout.module.css';
import { IModalLayout } from './ModalLayout.props';
import { X } from 'lucide-react';
import cn from 'classnames';
import { store } from '../../store/store';
import { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modal.slice';

export default function ModalLayout({ children }: IModalLayout) {

    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate();
        })

        return unsubscribe;
    }, [store.subscribe]);

    const closeModal = () => {
        dispatch(modalActions.setIsActive(!store.getState().modal.isActive))
    }

    return createPortal(
        <div className={cn(styles['modal'], {
            [styles['active']]: store.getState().modal.isActive
        })}>
            <div className={styles['content']}>
                <div className={styles['close-wrapper']}>
                    <button className={styles['close']} onClick={closeModal}>
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