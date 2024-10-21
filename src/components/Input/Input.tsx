import { useState } from 'react';
import styles from './Input.module.css'
import { IInput } from './Input.props';
import cn from 'classnames'

export default function Input({ type, id, title, value, ...props }: IInput,) {

    const [labelActive, setLabelActive] = useState(false);

    function active() {
        if(!value){
            setLabelActive((state) => !state);
            console.log(value)
        }
    }


    return (
        <div className={styles['input-wrapper']}>
            <label htmlFor={id} className={cn(styles['input-label'], {
                [styles['active']]: labelActive
            })}>{title}</label>
            <input type="text" id={id} value={value}{...props} className={styles['input']} onFocus={active} onBlur={active}/>
        </div>
    )
}