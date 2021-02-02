import React from "react";
import { useHistory } from 'react-router-dom';
const Page4 = () => {

    let history = useHistory();

    const handleClickNext = () => { 
        history.push("/operation/page5");
    }

    return (
        <div>
            <span>Результат диагностики</span>
            <span>
                Говно результат
            </span>
            <br></br>
            <span>Операция</span>
            <span>Место операции</span>
            <div>
                <button></button>
                <button></button>
            </div>
            <span>Применение анестезии</span>
            <div>
            <button></button>
            <button></button>
            </div>
            <button type="button" onClick={handleClickNext}>Начать операцию</button>
        </div>
    )
}


export default Page4;