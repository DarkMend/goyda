import { ChangeEvent, forwardRef, useEffect, useState } from "react";
import styles from './InputImage.module.css';
import cn from 'classnames';
import { IInputImage } from "./InputImage.props";
import { Image } from "lucide-react";

const InputImage = forwardRef<HTMLInputElement, IInputImage>(({ id, errorMessage, activeInput, ...props }, ref) => {

    const [active, setActive] = useState(activeInput);
    const [errorActive, setErrorActive] = useState(errorMessage);

    const activeInputImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setActive((state) => !state);
            setErrorActive('');
        }
    }
    
    useEffect(() => {
        setErrorActive(errorMessage);
    }, [errorMessage]);

    useEffect(() => {
        setActive(false);
    }, [activeInput])

    return (
        <>
            <label htmlFor={id} className={cn(styles['label'], {
                [styles['error']]: errorMessage && true,
                [styles['active']]: active
            })}>
                <input type="file" ref={ref} {...props} id={id} className={styles['input']} onChange={activeInputImage} />
                <Image className={styles['icon']} />
                {errorMessage ? <div className={cn(styles['error-message'], )}>{errorActive}</div> : ''}
            </label>
        </>
    )
})

export default InputImage;