
import { useHistory } from 'react-router-dom';
import styles from './OperationResult.module.css'

const Operation = ({ isOperationSucces }) => {
    let history = useHistory()

    const hadleClick = () => {
        history.push('/')
    }
    let operationSuccess = `Операция прошла крайне успешно, 
    да и пациенту серьёзно повезло: 
    осколки не успели пополнить ткани и кровоток. 
    Жизни вашего пациента ничего не угрожает.`

    let operationFailed = `Вы не можете понять откуда идет кровь - 
    такое ощущение, что рана пожирает вашего пациента изнутри. 
    Впрочем это уже не так важно: кровопотеря составляет 90%, 
    а значит пациент считай, что мёртв.`

    return (
        <div className={styles.operResult}>
            <h2>{isOperationSucces ? `Операция прошла успешно` : `Операция провалена`}</h2>
            <div className={styles.operationText}>
                {isOperationSucces ? `${operationSuccess}` : `${operationFailed}`}
            </div>

            <button className={`btn btn-secondary ${styles.endOperation}`} onClick={hadleClick}>Завершить операцию</button>
        </div>
    )
}

export default Operation;