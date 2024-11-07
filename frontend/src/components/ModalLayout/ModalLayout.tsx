import { createPortal } from 'react-dom';
import styles from './ModalLayout.module.css';
import { IModalLayout } from './ModalLayout.props';
import { X } from 'lucide-react';

export default function ModalLayout({ children }: IModalLayout) {

    

    return createPortal(
        <div className={styles['modal']}>
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