
import { React } from 'react';
const TestCounter = (props) => {
    return (
        <div >
            <div>Навык Врача : {props.medicSkill}</div>
            <div>Осложнение Врача : {props.cMedic}</div>
            <div>Осложнение Инфекция : {props.cInfection}</div>
            <div>Осложнение Зоны : {props.cZone}</div>
            <div>Осложнение Псих.Травмы : {props.cPsycho}</div>
            <div>Осложнение Кровотечение : {props.cBleeding}</div>
            <div>Рандом осложнения : {props.randomO}</div>
            <div>Рандом диагностики : {props.randomD}</div>
            <div>Навык операции : {props.operationSkill} </div>
            <div>Навык диагностики : {props.diagnoseSkill}</div>
        </div>
    )
}
export default TestCounter;