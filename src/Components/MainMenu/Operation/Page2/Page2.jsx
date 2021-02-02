import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styles from './Page2.module.css'
import { Button } from "@material-ui/core";

const Page2 = () => {
    let history = useHistory();

    const handleClickNext = () => {
        if(checkButtonsPressed ()) {
        history.push("/operation/page3")
        }
    }
    const checkButtonsPressed = () => {
        return woundTime && woundType && woundPlace
    }

    const [woundTime, setWoundTime] = useState();
    const handleWoundTime = (event, newWoundTime) => {
        setWoundTime(newWoundTime);
    }

    const [woundType, setwoundType] = useState();
    const handleWoundType = (event, newWoundType) => {
        setwoundType(newWoundType);
    }

    const [woundPlace, setWoundPlace] = useState();
    const handleWoundPlace = (event, newWoundPlace) => {
        setWoundPlace(newWoundPlace);
    }
    return (
        <div>
            <span><h3>Время с момента получения ранения (минуты)</h3></span>
            <div>
                <ToggleButtonGroup
                    value={woundTime}
                    exclusive
                    onChange={handleWoundTime}
                    aria-label="woundTime"
                    className={styles.buttons}
                >
                    <ToggleButton value="30" className={styles.button}>{'< 30'} </ToggleButton>
                    <ToggleButton value="45" className={styles.button}> 30 - 50 </ToggleButton>
                    <ToggleButton value="60" className={styles.button}> 50 - 90 </ToggleButton>
                    <ToggleButton value="90" className={styles.button}> {'> 90'} </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <span><h3>Тип ранения</h3></span>
            <div>
                <ToggleButtonGroup
                    value={woundType}
                    exclusive
                    onChange={handleWoundType}
                    aria-label="woundType"
                    className={styles.buttons}
                >
                    <ToggleButton value="gunshot" className={styles.button}>Огнестрельное</ToggleButton>
                    <ToggleButton value="knife" className={styles.button}>Ножевое</ToggleButton>
                    <ToggleButton value="anyWound" className={styles.button}>Иного характера</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <span><h3>Место ранения</h3></span>
            <div>
                <ToggleButtonGroup
                    value={woundPlace}
                    exclusive
                    onChange={handleWoundPlace}
                    aria-label="woundPlace"
                    className={styles.buttonsWoundPlace}
                >
                    <ToggleButton value="head" className={styles.button}>Голова</ToggleButton>
                    <ToggleButton value="limbs" className={styles.button}>Руки</ToggleButton>
                    <ToggleButton value="torso" className={styles.button}>Туловище</ToggleButton>
                    <ToggleButton value="limbs" className={styles.button}>Ноги</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <Button variant="contained" color="secondary" onClick={handleClickNext}>Далее</Button>
        </div>
    )
}

export default Page2;