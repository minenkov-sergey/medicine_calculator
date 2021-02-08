import React from "react";
import { useHistory } from 'react-router-dom';

const Operation = () => {
    let history = useHistory()


    const hadleClick = () => {
        history.push('/')
    }
    return (<div>
        <div>Operation Failed</div>
    <button onClick={hadleClick}>Спасибо нахуй, я умер</button>
    </div>
    )
}

export default Operation;