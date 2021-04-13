import { useHistory, withRouter } from 'react-router-dom';
import styles from './MainMenu.module.css'


const MainMenu = () => {

    let history = useHistory()

    const handleClickOperation = () => {
        history.push('/operation/');
    }
    return (
        <>
            <div className={styles.mainMenu}>
                <button className="btn btn-secondary" onClick={handleClickOperation}>Начать операцию</button>
                <button className="btn btn-outline-secondary" >Проверить навыки</button>
                <button className="btn btn-outline-secondary" >Добавить снаряжение</button>
                <button className="btn btn-secondary" >Статистика</button>
            </div>
            <div className={styles.version}> v 0.0.8 </div>
        </>

    )
}

export default withRouter(MainMenu);




