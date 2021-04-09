
import { React } from 'react';
import styles from './TestCounter.module.css'

const TestCounter = (props) => {
    return (
        <div >
            <div>Навык Врача : {props.medicSkill}</div>
            <br></br>
            <div>Осложнение Врача : {props.cMedic}</div>
            <div>Осложнение Инфекция : {props.cInfection}</div>
            <div>Осложнение Зоны : {props.cZone}</div>
            <div>Осложнение Псих.Травмы : {props.cPsycho}</div>
            <div>Осложнение Кровотечение : {props.cBleeding}</div>

            <div>Рандом диагностики : {props.randomD}</div>
            <div>Навык диагностики : {props.diagnoseSkill}</div>
            <div>Максимальное осложнение : {props.maxComplication}</div>
            <br></br>
            <div>Рандом операции : {props.randomO}</div>
            <div>Навык операции : {props.operationSkill} </div>
            <div>Электромедкомплекс : {props.morphine ? 'Да + 4' : 'Нет + 0'} </div>
            <div>Место операции : {props.operationPlace ? 'В лазарете + 3' : 'В поле + 0'} </div>
            <div>Счетчик сердца : {props.heartBeatCount} </div>
        </div>
    )
}
export default TestCounter;