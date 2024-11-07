import styles from './IconButtonLayout.module.css'
import { IIconButtonLayout } from './IconButtonLayout.props'
import cn from 'classnames'

export default function IconButtonLayout({children, className, ...props}: IIconButtonLayout ) {
    return (
        <button className={cn(styles['button'], className)} {...props}>
            {children}
        </button>
    )
}