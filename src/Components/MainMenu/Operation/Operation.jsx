import { React, useState, useEffect } from "react";
import Page1 from "./Page1/Page1";
import TestCounter from "../../TestCounter/TestCounter";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import OperationFailed from "./OperationResult/OperationFailed/OperationFailed";
import OperationSuccess from "./OperationResult/OperationSuccess/OperationSuccess";

const Operation = () => {
  const [page, setPage] = useState(1);
  const [operResult, setOperResult] = useState(Boolean);
  const [state, setState] = useState({
    cMedic: 0,
    cInfection: 0,
    cZone: 0,
    cPsycho: 0,
    cBleeding: 0,
    text: '',
    medicSkill: 1,
    diagnoseSkill: 0,
    operationSkill: 0,
    randomD: 0,
    randomO: 0,
    diagnoseResult: ''
  });

  useEffect ( () => {
    let stateC = {...state}
    if (page === 4) {
      let stateArr = Object.values(stateC).slice(0,5).sort(function(a,b) {return a-b})
      console.log(stateArr)
      let maxComplication = stateArr[4]
      console.log(maxComplication)
      let predMaxComplication = stateArr[3]
      console.log(predMaxComplication)
      let diagnoseFinal = stateC.diagnoseSkill + stateC.randomD
      console.log(diagnoseFinal)
      if(diagnoseFinal > maxComplication) {
        stateC.diagnoseResult='Блестящий диагноз, оперировать будет значительно проще'
        stateC.operationSkill +=5
      } else if (diagnoseFinal === maxComplication ) {
        stateC.diagnoseResult='Качественный диагноз. Операция обещает протекать спокойно'
        stateC.operationSkill +=3
      } else if ( (diagnoseFinal < maxComplication) && (diagnoseFinal > predMaxComplication) ) {
        stateC.diagnoseResult='Смешанный диагноз. Операция будет не из простых'
        stateC.operationSkill -=2
      } else if ( (diagnoseFinal / 2) < predMaxComplication ) {
        stateC.diagnoseResult='Посредственный диагноз. Операция будет тяжелой'
        stateC.operationSkill -=10
      } else if (diagnoseFinal < predMaxComplication ){
        stateC.diagnoseResult='Провальный диагноз. Вряд ли пациент доживёт до конца'
        stateC.operationSkill -=5
      }
      console.log(stateC)
    const result = { ...state, ...stateC };
    setState(result);
    }
  },[page])

  const onNext = (values) => {
    const result = { ...state, ...values };
    setState(result);
    const newPage = page + 1;
    console.log("result", result);

    setPage(newPage);
    if (newPage === 6) {
      onSubmit(result);
    }
  };

  const onSubmit = (result) => {
    console.log("result", result);
  };

  return (
    <div>
      {page === 1 && <Page1 {...state} onNext={onNext} />}
      {page === 2 && <Page2 {...state} onNext={onNext} />}
      {page === 3 && <Page3 {...state} onNext={onNext} />}
      {page === 4 && <Page4 {...state} onNext={onNext} />}
      {page === 5 && <Page5 {...state} onNext={onNext} />}
      {page === 6 && operResult === "fail" && <OperationFailed />}
      {page === 6 && operResult === "success" && <OperationSuccess />}
      <TestCounter {...state} />
    </div>
  );
};

export default Operation;



// {
//   cMedic: 0,
//   cInfection: 0,
//   cZone: 0,
//   cPsycho: 0,
//   cBleeding: 0,
//   medicSkill: 1,
//   diagnoseSkill: 0,
//   diagnoseR: 0,
//   operationSkill: 0,
//   operationR: 0,
//   diagnoseResult: null,
//   operationResult: null,
//   Random: 0,
// }