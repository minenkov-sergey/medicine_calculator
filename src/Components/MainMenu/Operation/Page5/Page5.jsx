import React, { useState } from "react";
import { useEffect } from "react";
import styles from './Page5.module.css'
import heart from '../../../../assets/heart.png'
import NextButton from './../../../Button/NextButton/NextButton';

const Page5 = (props) => {

    const [timer, setTimer] = useState(300)

    let minutes = Math.floor(timer / 60)
    let seconds = Math.floor(timer % 60)

    const [heartAttack, setHeartAttack] = useState(false)

    //timer
    useEffect(() => {
        let id = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
                if (Math.random() > 0.98) {
                    setHeartAttack(true)
                    window.navigator.vibrate([200, 100, 250, 500, 200, 100, 250, 500, 200, 100, 250, 500, 200, 100, 250, 500]);
                }
            } else {
                setHeartAttack(false)
                clearInterval(id)
            }
        }, 1000)
        return () => clearInterval(id)
    })

    const handleClick = () => {
        setHeartAttack(false)
        window.navigator.vibrate([0])
    }

    const onNext = () => {
        let pageResult = {

        }
        props.onNext(pageResult)
    };

    return (
        <div className={styles.page5}>
            <span className={styles.header}>Операция</span>
            <div className={styles.timer}>{'0' + minutes}:{seconds <= 9 ? '0' + seconds : seconds}</div>

            <div className={heartAttack ? styles.heartActive : styles.heart} onClick={handleClick}><img src={heart} alt='heart'></img></div>
            <div className={styles.nextButton}>
                <NextButton
                    text='Далее'
                    onNext={onNext}
                    disabled={timer > 0}
                    className={timer > 0 ? ("btn btn-outline-secondary") : ("btn btn-secondary")}
                />
            </div>
        </div>
    )
}

export default Page5;