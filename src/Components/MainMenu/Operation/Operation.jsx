import { React, useState, useEffect } from "react";
import Page1 from "./Page1/Page1";
import TestCounter from "../../TestCounter/TestCounter";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import OperationResult from "./OperationResult/OperationResult";

const Operation = () => {
  const [page, setPage] = useState(1);
  const [isOperationSucces, setOperationSucces] = useState('');
  const [state, setState] = useState({
    cMedic: 0,
    cInfection: 0,
    cZone: 0,
    cPsycho: 0,
    cBleeding: 0,
    maxComplication: 0,

    text: '',

    medicSkill: 2,
    diagnoseSkill: 0,
    operationSkill: 0,

    randomD: 0,
    randomO: 0,

    diagnoseResult: '',
    morphine: 0,
    operationPlace: 0,
    heartBeatCount: 0
  });

  useEffect(() => {
    let stateC = { ...state }
    if (page === 4) {
      let stateArr = Object.values(stateC).slice(0, 5).sort(function (a, b) { return a - b })
      stateC.maxComplication = stateArr[4]

      let diagnoseFinal = stateC.diagnoseSkill + stateC.randomD
      if (diagnoseFinal > stateC.maxComplication) {
        stateC.diagnoseResult = 'Качественный диагноз. Операция обещает протекать спокойно'
        stateC.operationSkill += 3
      } else if (diagnoseFinal === stateC.maxComplication) {
        stateC.diagnoseResult = 'Смешанный диагноз. Операция будет не из простых'
        stateC.operationSkill += 0
      } else if (diagnoseFinal < stateC.maxComplication) {
        stateC.diagnoseResult = 'Посредственный диагноз. Операция будет тяжелой'
        stateC.operationSkill -= 3
      }
      const result = { ...state, ...stateC };
      setState(result);
    }
    if (page === 6) {
      if ((stateC.operationSkill + stateC.morphine + stateC.operationPlace + stateC.randomO + stateC.heartBeatCount) > stateC.maxComplication) {
        setOperationSucces(true)
      } else {
        setOperationSucces(false)
      }
    }
    // eslint-disable-next-line
  }, [page])

  const onNext = (values) => {
    const result = { ...state, ...values };
    setState(result);
    const newPage = page + 1;

    setPage(newPage);
  };


  return (
    <div>
      {page === 1 && <Page1 {...state} onNext={onNext} />}
      {page === 2 && <Page2 {...state} onNext={onNext} />}
      {page === 3 && <Page3 {...state} onNext={onNext} />}
      {page === 4 && <Page4 {...state} onNext={onNext} />}
      {page === 5 && <Page5 {...state} onNext={onNext} />}
      {page === 6 && <OperationResult isOperationSucces={isOperationSucces} />}
      {/* <TestCounter {...state} /> */}
    </div>
  );
};

export default Operation;