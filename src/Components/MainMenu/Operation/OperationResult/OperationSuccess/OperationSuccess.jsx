import React from "react";
import { useHistory } from 'react-router-dom';

const Operation = () => {
    let history = useHistory()

    const hadleClick = () => {
        history.push('/')
    }

    return (<div>
        <div>Operation Success</div>
    <button onClick={hadleClick}>Operation Success</button>
    </div>)
}

export default Operation;