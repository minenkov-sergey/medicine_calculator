import { React, useState } from "react";
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
    cInfection: 0,
    cBleeding: 0,
    text: '',


  });

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
  const updateComplications = (answer) => {
    return { ...this.state, ...answer };
  };
  const getRandom = () => {
    let randomNumber = Math.random * 10;
    return randomNumber;
  };
  const clearComplications = () => {
    this.store.cBleeding = 0;
    this.store.cMedicError = 0;
    this.store.cInfection = 0;
    this.store.cZone = 0;
    this.store.cMedicError = 0;
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