import { React } from 'react';
import { useHistory,  withRouter } from 'react-router-dom';

const MainMenu = () => {

    let history = useHistory()

    const handleClickOperation = () => {
        history.push('/operation/');
    }
    return (
        <div>
            <button onClick={handleClickOperation}>Начать операцию</button>
        </div>

    )
}

export default withRouter(MainMenu);




