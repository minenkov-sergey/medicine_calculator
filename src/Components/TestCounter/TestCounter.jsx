
import { React } from 'react';
import styles from './TestCounter.module.css'
const TestCounter = (props) => {
    return (
        <div >
<div>Осложнение Врача : {props.cMedic}</div>
<div>Осложнение Инфекция : {props.cInfection}</div>
<div>Осложнение Зоны : {props.cZone}</div>
<div>Осложнение Псих.Травмы : {props.cPsycho}</div>
<div>Осложнение Кровотечение : {props.cBleeding}</div>
        </div>
    )
}
export default TestCounter;