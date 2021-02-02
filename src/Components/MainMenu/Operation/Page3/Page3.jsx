import React from "react";
import { useHistory } from 'react-router-dom';

const Page3 = () => {
    let history = useHistory();

    const handleClickNext = () => {
        history.push("/operation/page4");
    }
    const handleClickPrev = () => {
        history.push("/operation/page2");
    }
    return (

        <div>
            <span>Симптомы</span>
            <div>
                <button>Кашель</button>
                <button>Хрипы</button>
                <button>Рвота/диарея</button>
                <button>Резкая боль</button>
                <button>Длительная боль</button>
                <button>Мигрень</button>
                <button>Кровян. выделения</button>
                <button>Слабость</button>
                <button>Потеря крови</button>
                <button>Галлюцинации</button>
                <button>Амнезия</button>
                <button>Потеря чувствительности</button>
                <button>Головокружение</button>
                <button>Жар/Озноб</button>
                <button>Тремор</button>
                <button>Нестандартное поведение</button>
                <button>Сонливость/Апатия</button>
                <button>Недавнее облучение</button>
                <button>Недавний контакт с артефактами</button>
            </div>
            <button type="button" onClick={handleClickPrev}>Назад</button>
            <button type="button" onClick={handleClickNext}>Завершить диагностику</button>
        </div>

    )
}

export default Page3;