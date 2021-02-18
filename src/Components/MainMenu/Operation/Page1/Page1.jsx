import { React, useState, useEffect } from "react";

import styles from "./Page1.module.css";

const Page1 = (props) => {

    const [buttonStatus, setButtonStatus] = useState(true);

    const getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      }

    const onNext = () => {
        let pageResult = {
            cMedic: +sex[0] + +age[0] + +body[0] + +zoneTime[0] + +radiation[0],
            cInfection: +sex[1] + +age[1] + +body[1] + +zoneTime[1] + +radiation[1],
            cZone: +sex[2] + +age[2] + +body[2] + +zoneTime[2] + +radiation[2],
            cPsycho: +sex[3] + +age[3] + +body[3] + +zoneTime[3] + +radiation[3],
            cBleeding: +sex[4] + +age[4] + +body[4] + +zoneTime[4] + +radiation[4],
            text: sex[5] + age[5] + body[5] + zoneTime[5] + radiation[5]
        }
        if (sex[5] === 'Мужчина/') {
            pageResult.randomD = getRandom(3,9)
            pageResult.randomO = getRandom(1,5)
        } else {
            pageResult.randomD = getRandom(1,5)
            pageResult.randomO = getRandom(3,9)
        }
        props.onNext(pageResult)
    };

    const [sex, setSex] = useState();
    const handleSex = (e) => {
        let number = e.target.value.split(',')
        setSex(number)
    }
    const [age, setAge] = useState();
    const handleAge = (e) => {
        let number = e.target.value.split(',')
        setAge(number)
    }
    const [body, setBody] = useState();
    const handleBody = (e) => {
        let number = e.target.value.split(',')
        setBody(number)
    }
    const [zoneTime, setZoneTime] = useState();
    const handleZoneTime = (e) => {
        let number = e.target.value.split(',')
        setZoneTime(number)
    }
    const [radiation, setRadiation] = useState();
    const handleRadiation = (e) => {
        let number = e.target.value.split(',')
        setRadiation(number)
       
    }

    useEffect(() => {
        if (sex && age && body && zoneTime && radiation) {
            setButtonStatus(false);
        } else {setButtonStatus(true)}
    },[sex, age, body, zoneTime, radiation]);

    return (
        <div className={styles.page1}>
            <span className={styles.header}>Пол</span>
            <div className="btn-group" role="group" onChange={handleSex}>
                <input type="radio" className="btn-check" name="sex" id="sex1"  autoComplete="off" value={'0,0,0,0,0,Мужчина/'}/>
                <label className="btn btn-outline-secondary" htmlFor="sex1">Мужчина </label>

                <input type="radio" className="btn-check" name="sex" id="sex2"  autoComplete="off" value={'0,0,0,0,0,Женщина/'}/>
                <label className="btn btn-outline-secondary" htmlFor="sex2">Женщина</label>
            </div>

            <span className={styles.header}>Возраст</span>
            <div className="btn-group" role="group" onChange={handleAge}>
                <input type="radio" className="btn-check" name="age" id="age1" autoComplete="off" value={'-2,-2,0,0,0, младше 18/'} />
                <label className="btn btn-outline-secondary" htmlFor="age1">до 18</label>

                <input type="radio" className="btn-check" name="age" id="age2" autoComplete="off" value={'-2,-2,0,0,0, от 18 до 25/'} />
                <label className="btn btn-outline-secondary" htmlFor="age2">18 - 25</label>

                <input type="radio" className="btn-check" name="age" id="age3" autoComplete="off" value={'0,0,-1,-1,-1, от 26 до 40/'} />
                <label className="btn btn-outline-secondary" htmlFor="age3">26-40</label>

                <input type="radio" className="btn-check" name="age" id="age4" autoComplete="off" value={'0,0,-1,-1,-1, старше 40/'} />
                <label className="btn btn-outline-secondary" htmlFor="age4">больше 40</label>

            </div>
            <span className={styles.header}>Телосложение</span>
            <div className="btn-group" role="group" onChange={handleBody}>
                <input type="radio" className="btn-check" name="body" id="body1" autoComplete="off" value={'0,0,2,-2,0,тучное/'} />
                <label className="btn btn-outline-secondary" htmlFor="body1">Тучное</label>

                <input type="radio" className="btn-check" name="body" id="body2" autoComplete="off" value={'0,0,0,2,-2,атлетичное/'} />
                <label className="btn btn-outline-secondary" htmlFor="body2">Атлетичное</label>

                <input type="radio" className="btn-check" name="body" id="body3" autoComplete="off" value={'-1,-1,-1,1,1,среднее/'} />
                <label className="btn btn-outline-secondary" htmlFor="body3">Среднее</label>

                <input type="radio" className="btn-check" name="body" id="body4" autoComplete="off" value={'0,0,-2,0,2,тощее/'} />
                <label className="btn btn-outline-secondary" htmlFor="body4">Тощее</label>
            </div>

            <span className={styles.header}>Время проведенное в зоне</span>
            <div className="btn-group" role="group" onChange={handleZoneTime}>
                <input type="radio" className="btn-check" name="zoneTime" id="zoneTime1" autoComplete="off" value={'1,1,-3,2,0,Меньше года/'} />
                <label className="btn btn-outline-secondary" htmlFor="zoneTime1">Меньше года</label>

                <input type="radio" className="btn-check" name="zoneTime" id="zoneTime2" autoComplete="off" value={'1,-1,1,1,-1,от года до трех лет/'}/>
                <label className="btn btn-outline-secondary" htmlFor="zoneTime2">от года до трех лет</label>

                <input type="radio" className="btn-check" name="zoneTime" id="zoneTime3" autoComplete="off" value={'1,-1,2,-1,-1,более 3х лет/'}/>
                <label className="btn btn-outline-secondary" htmlFor="zoneTime3">больше 3х лет</label>
            </div>

            <span className={styles.header}>Уровень облучения</span>
            <div className="btn-group" role="group" onChange={handleRadiation}>
                <input type="radio" className="btn-check" name="radLevel" id="radLevel1" autoComplete="off" value={'-1,1,1,-1,0,Слабый/'}/>
                <label className="btn btn-outline-secondary" htmlFor="radLevel1">Слабое</label>

                <input type="radio" className="btn-check" name="radLevel" id="radLevel2" autoComplete="off" value={'1,-2,1,0,0,Средний/'}/>
                <label className="btn btn-outline-secondary" htmlFor="radLevel2">Среднее</label>

                <input type="radio" className="btn-check" name="radLevel" id="radLevel3" autoComplete="off" value={'1,-1,2,-1,-1,Сильный/'}/>
                <label className="btn btn-outline-secondary" htmlFor="radLevel3">Сильное</label>
            </div>

            <div className={styles.nextButtonBack}>
                {buttonStatus ? (
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
    );
};

export default Page1;
