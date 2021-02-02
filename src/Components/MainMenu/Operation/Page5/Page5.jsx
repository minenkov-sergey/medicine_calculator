import React from "react";
import { useHistory } from 'react-router-dom';

const Page5 = () => {

    let history = useHistory();

    const handleClickNext = () => { 
        history.push("/operation/page6");
    }

    return (
        <div>
            <span>Операция</span>
            <span>Здесь таймер</span>
            <div> Сердечко </div>
            <button type="button" onClick={handleClickNext}>Завершить операцию</button>
        </div>
    )
}

export default Page5;