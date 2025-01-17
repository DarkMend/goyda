import { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import styles from './Input.module.css'
import { IInput } from './Input.props';
import cn from 'classnames'

const Input = forwardRef<HTMLInputElement, IInput>(({ type = 'text', id, title, value, errorActive = false, activeInput, ...props }, ref) => {

    const [labelActive, setLabelActive] = useState(activeInput);

    function active(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.value) {
            setLabelActive((state) => !state);
        }
    }

    useEffect(() => {
        setLabelActive(activeInput);
    }, [activeInput])

    return (
        <div className={styles['input-wrapper']}>
            <label htmlFor={id} className={cn(styles['input-label'], {
                [styles['active']]: labelActive
            })}>{title}</label>
            <input ref={ref} type={type} id={id} value={value} {...props} className={styles['input']} onFocus={active} onBlur={active} autoComplete='new-password'/>
            <div className={cn({ [styles['error']]: errorActive && true })}>{errorActive}</div>
        </div>
    )
})

export default Input;