import React, { useState, useEffect } from "react";
import styles from './Page3.module.css'
import NextButton from './../../../Button/NextButton/NextButton';

const Page3 = (props) => {

    const [buttonStatus, setButtonStatus] = useState(true);

    const [symptoms, addSymptoms] = useState([])
    useEffect(() => {
        if (symptoms.length >= 1) {
            setButtonStatus(false);
        } else { setButtonStatus(true) }
    }, [symptoms]);

    const onNext = () => {

        let newSymptoms = [0, 0, 0, 0, 0, '']
        const sumOfSymptoms = () => {
            for (let i = 0; i < symptoms.length; i++) {

                newSymptoms[0] += +symptoms[i][0]
                newSymptoms[1] += +symptoms[i][1]
                newSymptoms[2] += +symptoms[i][2]
                newSymptoms[3] += +symptoms[i][3]
                newSymptoms[4] += +symptoms[i][4]
                newSymptoms[5] += symptoms[i][5]
            }
        }
        sumOfSymptoms()

        let pageResult = {
            cMedic: +props.cMedic + +newSymptoms[0],
            cInfection: +props.cInfection + +newSymptoms[1],
            cZone: +props.cZone + +newSymptoms[2],
            cPsycho: +props.cPsycho + +newSymptoms[3],
            cBleeding: +props.cBleeding + +newSymptoms[4],
            text: props.text + newSymptoms[5],
            medicSkill: props.medicSkill,
            diagnoseSkill: props.diagnoseSkill,
            operationSkill: props.operationSkill,
            randomD: props.randomD,
            randomO: props.randomO
        }
        //проверка на итоговое число симптомов
        if (symptoms.length < 3) {
            pageResult.cMedic *= 3
            pageResult.cInfection *= 3
            pageResult.cZone *= 3
            pageResult.cPsycho *= 3
            pageResult.cBleeding *= 3
        }
        //выставление скилла диагноза и операции
        pageResult.diagnoseSkill = props.medicSkill * 2
        pageResult.operationSkill = props.medicSkill
        props.onNext(pageResult)
    };

    const handleSymptoms = (e) => {
        if (e.target.check === 'true') {
            e.target.check = 'false'
            let number = e.target.value.split(',')
            let index = symptoms.findIndex(symptom => symptom[5] === number[5])
            symptoms.splice(index, 1)
            addSymptoms([...symptoms])

            return
        } else {
            e.target.check = 'true'
            let number = e.target.value.split(',')
            addSymptoms([...symptoms, number])
        }

    }

    return (

        <div className={styles.page3}>
            <span className={styles.header}>Симптомы</span>
            <div className={`btn-group ${styles.symptoms}`} role="group" onChange={handleSymptoms}>
                <input type="checkbox" className={`btn-check`} id="symptom1" autoComplete="off" value={'1,2,1,0,1,кашель/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom1">Кашель</label>

                <input type="checkbox" className="btn-check" id="symptom2" autoComplete="off" value={'1,1,1,0,2,хрипы/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom2">Хрипы</label>

                <input type="checkbox" className="btn-check" id="symptom4" autoComplete="off" value={'1,0,2,1,0, резкая боль/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom4">Резкая боль</label>

                <input type="checkbox" className="btn-check" id="symptom5" autoComplete="off" value={'0,1,1,1,1, длительная боль/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom5">Длительная боль</label>

                <input type="checkbox" className="btn-check" id="symptom6" autoComplete="off" value={'1,1,1,3,0, мигрень'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom6">Мигрень</label>

                <input type="checkbox" className="btn-check" id="symptom8" autoComplete="off" value={'1,2,1,1,0, слабость/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom8">Слабость</label>

                <input type="checkbox" className="btn-check" id="symptom9" autoComplete="off" value={'0,2,1,0,3, потеря крови/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom9">Потеря крови</label>

                <input type="checkbox" className="btn-check" id="symptom10" autoComplete="off" value={'1,0,2,3,0, галлюцинации/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom10">Галлюцинации</label>

                <input type="checkbox" className={`btn-check`} id="symptom11" autoComplete="off" value={'1,0,2,3,0, амнезия/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom11">Амнезия</label>

                <input type="checkbox" className="btn-check" id="symptom12" autoComplete="off" value={'1,2,2,1,0, потеря чувствительности/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom12">Потеря чувствительности</label>

                <input type="checkbox" className="btn-check" id="symptom13" autoComplete="off" value={'1,0,1,1,1, головокружение/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom13">Головокружение</label>

                <input type="checkbox" className="btn-check" id="symptom14" autoComplete="off" value={'1,2,1,0,1, озноб/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom14">Жар/Озноб</label>

                <input type="checkbox" className="btn-check" id="symptom15" autoComplete="off" value={'0,1,1,2,0, тремор/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom15">Тремор</label>

                <input type="checkbox" className="btn-check" id="symptom17" autoComplete="off" value={'1,1,2,2,0, апатия/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom17">Сонливость/Апатия</label>

                <input type="checkbox" className="btn-check" id="symptom18" autoComplete="off" value={'1,0,2,1,0, недавнее облучение/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom18">Недавнее облучение</label>

                <input type="checkbox" className="btn-check" id="symptom19" autoComplete="off" value={'1,1,2,1,0, контакт с артефактами/'} check={'false'} />
                <label className={`btn btn-outline-secondary ${styles.buttonText}`} htmlFor="symptom19">Недавний контакт с артефактами</label>
            </div>
            <div className={styles.nextButton}>
                <NextButton
                    text='Далее'
                    onNext={onNext}
                    disabled={buttonStatus}
                    className={buttonStatus ? ("btn btn-outline-secondary") : ("btn btn-secondary")}
                />
            </div>
        </div>

    )
}

export default Page3;