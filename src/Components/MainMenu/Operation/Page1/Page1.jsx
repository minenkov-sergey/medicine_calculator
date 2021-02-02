import { React, useState, useEffect } from "react";

import styles from "./Page1.module.css";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { Button } from "@material-ui/core";
import TestCounter from "./../../../TestCounter/TestCounter";

const Page1 = (props) => {
  const checkButtonsPressed = () => {
    return sex && age && bodyType && zoneTime && radiationLevel;
  };

  const [buttonStatus, setButtonStatus] = useState(true);
  useEffect(() => {
    if (checkButtonsPressed()) {
      setButtonStatus(false);
    }
  });

  const [sex, setSex] = useState();
  const handleSex = (event, newSex) => {
    let basicRandom =
      Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
      Math.ceil(1);
    if (newSex === "male") {
      let rand =
        Math.floor(Math.random() * (Math.floor(9) - Math.ceil(3) + 1)) +
        Math.ceil(3);
      newSex = { diagnoseR: rand, operationR: basicRandom };
    } else if (newSex === "female") {
      let rand =
        Math.floor(Math.random() * (Math.floor(9) - Math.ceil(3) + 1)) +
        Math.ceil(3);
      newSex = { operationR: rand, diagnoseR: basicRandom };
    }
    setSex(newSex);
  }
  const [age, setAge] = useState({});
  const handleAge = (event, newAge) => {
    if (newAge <= 25) {
      newAge = { cMedic: -2, cInfection: -2 };
    } else if (newAge > 25) {
      newAge = { cZone: -1, cPsycho: -1, cBleeding: -1 };
    }
    setAge(newAge);
  }
  const [bodyType, setBodyType] = useState();
  const handleBodyType = (event, newBodyType) => {
    if ((newBodyType = "Stubby")) {
        newBodyType = {cZone: 2, cPsycho: -2}
    } else if ((newBodyType = "Athletic")) {
        newBodyType = {cBleeding: 2, cPsycho: 2}
    } else if ((newBodyType = "Standard")) {
        newBodyType = {cZone: 1, cPsycho: 1, cBleeding: 1, cMedic: -1, cInfection: -1}
    } else if ((newBodyType = "Skinny")) {
        newBodyType = {cBleeding: 2, cZone: -2}
    }
    setBodyType(newBodyType);
  }
  const [zoneTime, setZoneTime] = useState();
  const handleZoneTime = (event, newZoneTime) => {
    if ((newZoneTime = "0.5")) {
        newZoneTime = {cMedic: 1, cInfection: 1, cZone: -3, cPsycho: 2}
    } else if ((newZoneTime = "1")) {
        newZoneTime = {cMedic: 1, cInfection: -1, cZone: 1, cPsycho: 1, cBleeding: -1 }
    } else if ((newZoneTime = "3")) {
        newZoneTime = {cMedic: 1, cInfection: -1, cZone: 2, cPsycho: -1, cBleeding: -1 }
    setZoneTime(newZoneTime);
  }
}
  const [radiationLevel, setRadiationLevel] = useState();
  const handleRadiationLevel = (event, newRadiationLevel) => {
    if ((newRadiationLevel = "low")) {
        newRadiationLevel = {cMedic: -1, cInfection: 1, cZone: 2, cPsycho: -1}
    } else if ((newRadiationLevel = "middle")) {
        newRadiationLevel = {cMedic: 1, cInfection: -2, cZone: 1 }
    } else if ((newRadiationLevel = "high")) {
        newRadiationLevel = {cMedic: 1, cInfection: -2, cZone: -1, cPsycho: 1 }
    setRadiationLevel(newRadiationLevel);
  }
}

  const onNext = () => {
    const values = {
      cMedic: age + bodyType + zoneTime + radiationLevel,
      cInfection: age + bodyType + zoneTime + radiationLevel,
      cZone: age + bodyType + zoneTime + radiationLevel,
      cPsycho: age + bodyType + zoneTime + radiationLevel,
      cBleeding: age + bodyType + zoneTime + radiationLevel,
      diagnoseR: sex.diagnoseR,
      operationR: sex.operationR,
    };

    props.onNext(values);
  };

  return (
    <div>
      <span className={styles.header}>Пол</span>
      <div className={styles.buttons}>
        <ToggleButtonGroup
          value={sex}
          id={sex}
          exclusive
          onChange={handleSex}
          aria-label="sex"
          className={styles.buttonsGroup}
          size="small"
        >
          <ToggleButton value="male" id="male" className={styles.button}>
            Мужчина
          </ToggleButton>
          <ToggleButton value="female" id="female" className={styles.button}>
            Женщина
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <span className={styles.header}>Возраст</span>
      <div className={styles.buttons}>
        <ToggleButtonGroup
          value={age}
          exclusive
          onChange={handleAge}
          aria-label="age"
          className={styles.buttonsGroup}
          size="small"
        >
          <ToggleButton value={"18"} className={styles.button}>
            до 18
          </ToggleButton>
          <ToggleButton value={"24"} className={styles.button}>
            18 - 25
          </ToggleButton>
          <ToggleButton value={"26"} className={styles.button}>
            26-40
          </ToggleButton>
          <ToggleButton value={"41"} className={styles.button}>
            больше 40
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <span className={styles.header}>Телосложение</span>
      <div className={styles.buttons}>
        <ToggleButtonGroup
          value={bodyType}
          exclusive
          onChange={handleBodyType}
          aria-label="bodyType"
          className={styles.buttonsGroup}
          size="small"
        >
          <ToggleButton value="Stubby" className={styles.button}>
            Тучное
          </ToggleButton>
          <ToggleButton value="Athletic" className={styles.button}>
            Атлетичное
          </ToggleButton>
          <ToggleButton value="Standard" className={styles.button}>
            Стандартное
          </ToggleButton>
          <ToggleButton value="Skinny" className={styles.button}>
            Тощее
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <span className={styles.header}>Время проведенное в зоне</span>
      <div className={styles.buttons}>
        <ToggleButtonGroup
          value={zoneTime}
          exclusive
          onChange={handleZoneTime}
          aria-label="zoneTime"
          className={styles.buttonsGroup}
          size="small"
        >
          <ToggleButton value="0.5" className={styles.button}>
            Новичек
          </ToggleButton>
          <ToggleButton value="1" className={styles.button}>
            Опытный
          </ToggleButton>
          <ToggleButton value="3" className={styles.button}>
            Бывалый
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <span className={styles.header}>Уровень облучения</span>
      <div className={styles.buttons}>
        <ToggleButtonGroup
          value={radiationLevel}
          exclusive
          onChange={handleRadiationLevel}
          aria-label="radiationLevel"
          className={styles.buttonsGroup}
          size="small"
        >
          <ToggleButton value="low" className={styles.button}>
            мало
          </ToggleButton>
          <ToggleButton value="middle" className={styles.button}>
            средне
          </ToggleButton>
          <ToggleButton value="high" className={styles.button}>
            много
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={styles.nextButtonBack}>
        
        {buttonStatus ? (
          <Button
            variant="contained"
            onClick={onNext}
            disabled={true}
            className={styles.nextButtonOff}
          >
            Далее
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={onNext}
            disabled={false}
            className={styles.nextButtonOn}
          >
            Далее
          </Button>
        )}
      </div>
      <div>
        <TestCounter />
      </div>
    </div>
  );
};


export default Page1;
