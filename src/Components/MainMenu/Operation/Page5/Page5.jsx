import React, { useState } from "react";
import { useEffect } from "react";
import styles from './Page5.module.css'
import heart from '../../../../assets/heart.png'

const Page5 = (props) => {

    const [timer, setTimer] = useState(300)
    
    let minutes = Math.floor(timer/60)
    let seconds = Math.floor(timer%60)

    const [heartAttack, setHeartAttack] = useState(false)
    
    useEffect( () => { 
        let id = setInterval( () => {
            if(timer>0){
                setTimer(timer - 1)
                if(Math.random()> 0.98) {
                    setHeartAttack(true)
                    while(heartAttack){
                        window.navigator.vibrate([50, 50, 50, 100]);
                    }
                }
            } else {
                setHeartAttack(false)
                clearInterval(id)}
        }, 1000)
        return () => clearInterval(id)
    })

    const handleClick = () => {
        setHeartAttack(false)
    }

    const onNext = () => {
        let pageResult = {
             
        }
        props.onNext(pageResult)
    };

    


    return (
        <div className={styles.page5}>
            <span className={styles.header}>Операция</span>
            <div className={styles.timer}>{'0' + minutes}:{seconds <= 9? '0' + seconds : seconds}</div>
            
            <div className={heartAttack? styles.heartActive : styles.heart} onClick={handleClick}><img src={heart}></img></div>

            <div className={styles.nextButtonBack}>
                {timer > 0 ? (
                    <button variant="contained" onClick={onNext} disabled={true} className="btn btn-outline-secondary">
                        Далее
                    </button>
                ) : (
                    <button variant="contained" onClick={onNext} disabled={false} className="btn btn-secondary">
                        Далее
                    </button>
                    )}
            </div>
        </div>
    )
}

export default Page5;