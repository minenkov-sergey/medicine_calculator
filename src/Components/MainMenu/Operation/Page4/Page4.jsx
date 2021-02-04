import React, { useState, useEffect } from "react";
import styles from './Page4.module.css'
const Page4 = (props) => {

    const [buttonStatus, setButtonStatus] = useState(true);

    const [morphin, setMorphin] = useState()
    const handleMorphine = (e) => {
        let number = e.target.value.split(',')
        setMorphin(number);
    }
    const [operationPlace, setOperationPlace] = useState()
    const handleOperationPlace = (e) => {
        let number = e.target.value.split(',')
        setOperationPlace(number);
    }

    const onNext = () => {
        let pageResult = {
            cMedic: +props.cMedic,
            cInfection: +props.cInfection,
            cZone: +props.cZone,
            cPsycho: +props.cPsycho,
            cBleeding: +props.cBleeding,
            text: props.text,
            medicSkill: props.medicSkill 
        }
        props.onNext(pageResult)
    };

    useEffect(() => {
        if (operationPlace && morphin) {
            setButtonStatus(false);
        } else {setButtonStatus(true)}
    },[operationPlace, morphin]);

    return (
        <div className={styles.page4}>
            {console.log(props)}
            <span className={styles.header}>Результат диагностики</span>
            <span className={styles.text}>{props.diagnoseResult}</span>

            <br></br>

            <span className={styles.headerOp}>Операция</span>

            <span className={styles.header}>Место операции</span>
            <div className="btn-group" role="group" onChange={handleMorphine}>
                <input type="radio" className="btn-check" name="operationPlace" id="operationPlace1"  autoComplete="off" value={'0,0,0,0,0,Менее 30/,2'}/>
                <label className="btn btn-outline-secondary" htmlFor="operationPlace1">Поле</label>

                <input type="radio" className="btn-check" name="operationPlace" id="operationPlace2"  autoComplete="off" value={'0,0,0,0,0,от 30 до 45/,0'}/>
                <label className="btn btn-outline-secondary" htmlFor="operationPlace2">Лазарет</label>
            </div>

            <span className={styles.header}>Применение анестезии</span>
            <div className="btn-group" role="group" onChange={handleOperationPlace}>
                <input type="radio" className="btn-check" name="morphin" id="morphin1"  autoComplete="off" value={'0,0,0,0,0,Менее 30/,2'}/>
                <label className="btn btn-outline-secondary" htmlFor="morphin1">Да</label>

                <input type="radio" className="btn-check" name="morphin" id="morphin2"  autoComplete="off" value={'0,0,0,0,0,от 30 до 45/,0'}/>
                <label className="btn btn-outline-secondary" htmlFor="morphin2">Нет</label>
            </div>

            <div className={styles.nextButtonBack}>
                            {buttonStatus ? (
                                <button variant="contained" onClick={onNext} disabled={true} className={`btn btn-outline-secondary ${styles.buttonText}`}>
                                    Завершить диагностику
                                </button>
                            ) : (
                                    <button variant="contained" onClick={onNext} disabled={false} className="btn btn-secondary">
                                        Завершить диагностику
                                    </button>
                                )}
                        </div>
        </div>
    )
}


export default Page4;