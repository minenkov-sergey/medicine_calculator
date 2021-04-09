import React, { useState, useRef } from "react";
import { useEffect } from "react";
import styles from './Page5.module.css'
import heart from '../../../../assets/heart.png'
import NextButton from './../../../Button/NextButton/NextButton';

const Page5 = (props) => {

    const [timer, setTimer] = useState(300)

    let minutes = Math.floor(timer / 60)
    let seconds = Math.floor(timer % 60)

    const [heartAttack, setHeartAttack] = useState(false)
    const heartData = useRef(null);
    heartData.current = heartAttack
    const [heartBeatCount, setHeartBeatCount] = useState(0)


    const onNext = () => {
        let pageResult = {
            heartBeatCount: +heartBeatCount
        }
        props.onNext(pageResult)
    };

    const heartBeat = () => {
        window.navigator.vibrate([200, 100, 300, 500, 200, 100, 300, 500, 200, 100, 300, 500, 200, 100, 300, 500, 200, 100, 300, 500]);
        setTimeout(() => {
            heartData.current && setHeartBeatCount(heartBeatCount => heartBeatCount - 1)
            //there is a bug, if heartAttacks going one after another, 
            //so heartAttack change to false 
            //cause to affect on next heartAttack sequence 
            //that happened after previous with success click, 
            //and player get -1 point almost immediatly(<5sec).
            //on rate 0.975 its very rare chance to happen.
            setHeartAttack(heartAttack => false)
        }, 5000);
    }

    //timer
    useEffect(() => {
        let id = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)

                if ((Math.random() > 0.975) && !heartAttack) {
                    console.log('heartattack')
                    setHeartAttack(heartAttack => true)
                    heartBeat()
                }
            } else {
                setHeartAttack(false)
                clearInterval(id)
            }
        }, 1000)
        return () => clearInterval(id)
    })

    const handleClick = () => {
        if (heartData.current) {
            setHeartAttack(heartAttack => false)
            window.navigator.vibrate([0])
            setHeartBeatCount(heartBeatCount => heartBeatCount + 1)
        }
    }

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