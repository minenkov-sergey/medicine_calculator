import React, { useState, useEffect } from "react";
import styles from './Page2.module.css'
import NextButton from './../../../Button/NextButton/NextButton';
import head from '../../../../assets/head.png'
import body from '../../../../assets/body.png'
import arms from '../../../../assets/arms.png'
import legs from '../../../../assets/legs.png'
import head_c from '../../../../assets/head_check.png'
import body_c from '../../../../assets/body_check.png'
import arms_c from '../../../../assets/arms_check.png'
import legs_c from '../../../../assets/legs_check.png'

const Page2 = (props) => {

    const [buttonStatus, setButtonStatus] = useState(true);


    const onNext = () => {
        let pageResult = {
            cMedic: +props.cMedic + +woundTime[0] + +woundType[0] + +woundPlace[0],
            cInfection: +props.cInfection + +woundTime[1] + +woundType[1] + +woundPlace[1],
            cZone: +props.cZone + +woundTime[2] + +woundType[2] + +woundPlace[2],
            cPsycho: +props.cPsycho + +woundTime[3] + +woundType[3] + +woundPlace[3],
            cBleeding: +props.cBleeding + +woundTime[4] + +woundType[4] + +woundPlace[4],
            text: props.text + woundTime[5] + woundType[5] + woundPlace[5],
            medicSkill: props.medicSkill + +woundTime[6]
        }
        props.onNext(pageResult)
    };


    const [woundTime, setWoundTime] = useState();
    const handleWoundTime = (e) => {
        let number = e.target.value.split(',')
        setWoundTime(number);
    }

    const [woundType, setwoundType] = useState();
    const handleWoundType = (e) => {
        let number = e.target.value.split(',')
        setwoundType(number);
    }

    const [woundPlace, setWoundPlace] = useState();
    const handleWoundPlace = (e) => {
        let number = e.target.value.split(',')
        setWoundPlace(number);
    }

    useEffect(() => {
        if (woundTime && woundType && woundPlace) {
            setButtonStatus(false);
        } else { setButtonStatus(true) }
    }, [woundTime, woundType, woundPlace]);

    return (
        <div className={styles.page2}>
            <span className={styles.header}>Время с момента получения ранения (минуты)</span>
            <div className="btn-group" role="group" onChange={handleWoundTime}>
                <input type="radio" className="btn-check" name="time" id="time1" autoComplete="off" value={'0,0,0,0,0,Менее 30/,2'} />
                <label className="btn btn-outline-secondary" htmlFor="time1">Менее 30</label>

                <input type="radio" className="btn-check" name="time" id="time2" autoComplete="off" value={'0,0,0,0,0,от 30 до 45/,0'} />
                <label className="btn btn-outline-secondary" htmlFor="time2">от 30 до 45</label>

                <input type="radio" className="btn-check" name="time" id="time3" autoComplete="off" value={'0,0,0,0,0,от 45 до 60/,0'} />
                <label className="btn btn-outline-secondary" htmlFor="time3">от 45 до 60</label>

                <input type="radio" className="btn-check" name="time" id="time4" autoComplete="off" value={'0,0,0,0,0,более 60/,-3'} />
                <label className="btn btn-outline-secondary" htmlFor="time4">более 60</label>
            </div>
            <span className={styles.header}>Тип ранения</span>
            <div className="btn-group" role="group" onChange={handleWoundType}>
                <input type="radio" className="btn-check" name="type" id="type1" autoComplete="off" value={'3,1,0,2,0,Огнестрельное/'} />
                <label className="btn btn-outline-secondary" htmlFor="type1">Огнестрельное</label>

                <input type="radio" className="btn-check" name="type" id="type2" autoComplete="off" value={'2,2,0,0,2,Ножевое/'} />
                <label className="btn btn-outline-secondary" htmlFor="type2">Ножевое</label>

                <input type="radio" className="btn-check" name="type" id="type3" autoComplete="off" value={'2,5,2,2,2,Иного характера/'} />
                <label className="btn btn-outline-secondary" htmlFor="type3">Иного характера</label>

            </div>
            <span className={styles.header}>Место ранения</span>
            <div className={`btn-group ${styles.manequin}`} role="group" onChange={handleWoundPlace}>
                <input type="radio" className={`btn-check`} name="place" id="place1" autoComplete="off" value={'5,1,2,2,0,головы/'} />
                <label className={`${styles.head} `} htmlFor="place1">
                    {woundPlace == '5,1,2,2,0,головы/' ? <img src={head_c} alt='head_c' /> : <img src={head} alt='head' />} </label>

                <input type="radio" className={`btn-check `} name="place" id="place2" autoComplete="off" value={'1,1,1,0,1,руки/'} />
                <label className={`${styles.hands}`} htmlFor="place2">
                    {woundPlace == '1,1,1,0,1,руки/' ? <img src={arms_c} alt='arms_c' /> : <img src={arms} alt='arms' />} </label>

                <input type="radio" className={`btn-check `} name="place" id="place3" autoComplete="off" value={'3,1,1,0,1,туловища/'} />
                <label className={`${styles.body}`} htmlFor="place3">
                    {woundPlace == '3,1,1,0,1,туловища/' ? <img src={body_c} alt='body_c' /> : <img src={body} alt='body' />} </label>

                <input type="radio" className={`btn-check `} name="place" id="place4" autoComplete="off" value={'1,1,1,0,1,ноги/'} />
                <label className={` ${styles.legs}`} htmlFor="place4">
                    {woundPlace == '1,1,1,0,1,ноги/' ? <img src={legs_c} alt='legs_c' /> : <img src={legs} alt='legs' />} </label>
            </div>
            <div className={styles.nextButton}>
                <NextButton
                    text='Далее'
                    onNext={onNext}
                    disabled={buttonStatus}
                    className={buttonStatus ? ("btn btn-outline-secondary") : ("btn btn-secondary")}
                />
            </div>

        </div >
    )
}

export default Page2;