import React, { useState, useEffect } from "react";
import styles from './Page4.module.css'
import NextButton from './../../../Button/NextButton/NextButton';
const Page4 = (props) => {

    const [buttonStatus, setButtonStatus] = useState(true);

    const [morphine, setMorphine] = useState()
    const handleMorphine = (e) => {
        let number = e.target.value
        setMorphine(number);
    }
    const [operationPlace, setOperationPlace] = useState()
    const handleOperationPlace = (e) => {
        let number = e.target.value
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
            medicSkill: props.medicSkill,
            operationPlace: +operationPlace,
            morphine: +morphine
        }
        props.onNext(pageResult)
    };

    const textArr = props.text.split('/')
    const textSypmtoms = textArr.slice(8)

    useEffect(() => {
        if (operationPlace && morphine) {
            setButtonStatus(false);
        } else { setButtonStatus(true) }
    }, [operationPlace, morphine]);

    return (
        <div className={styles.page4}>
            <span className={styles.header}>Результат диагностики</span>
            <span className={styles.textDiagnose}>{props.diagnoseResult}</span>
            <span className={styles.text}>
                {`Пациент: ${textArr[0]}
            в возрасте ${textArr[1]},
            телосложение - ${textArr[2]},
            в зоне находится ${textArr[3]},
            уровень радиационного поражения - ${textArr[4]}.
            Травма получена ${textArr[5]} минут,
            тип раны: ${textArr[6]} в область ${textArr[7]}.
            Симптомы: ${textSypmtoms} `}</span>

            <br></br>

            <span className={styles.headerOp}>Операция</span>

            <span className={styles.header}>Место операции</span>
            <div className="btn-group" role="group" onChange={handleOperationPlace}>
                <input type="radio" className="btn-check" name="operationPlace" id="operationPlace1" autoComplete="off" value={'0'} />
                <label className="btn btn-outline-secondary" htmlFor="operationPlace1">Поле</label>

                <input type="radio" className="btn-check" name="operationPlace" id="operationPlace2" autoComplete="off" value={'3'} />
                <label className="btn btn-outline-secondary" htmlFor="operationPlace2">Лазарет</label>
            </div>

            <span className={styles.header}>Использование электронного медкомплекса</span>
            <div className="btn-group" role="group" onChange={handleMorphine}>
                <input type="radio" className="btn-check" name="morphin" id="morphin1" autoComplete="off" value={'4'} />
                <label className="btn btn-outline-secondary" htmlFor="morphin1">Да</label>

                <input type="radio" className="btn-check" name="morphin" id="morphin2" autoComplete="off" value={'0'} />
                <label className="btn btn-outline-secondary" htmlFor="morphin2">Нет</label>
            </div>
            <div className={styles.nextButton}>
                <NextButton
                    text='Завершить диагностику'
                    onNext={onNext}
                    disabled={buttonStatus}
                    className={buttonStatus ? ("btn btn-outline-secondary") : ("btn btn-secondary")}
                />
            </div>

        </div>
    )
}


export default Page4;