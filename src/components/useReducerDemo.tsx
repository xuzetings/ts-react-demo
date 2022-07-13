import { useReducer } from "react";
import { COUNTER_ACTION_TYPE } from "../types";
import countReducer from '../reducers/CountReducer';

const initialState = { count: 0 };

export default function Hello() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleIncrease = () => {
    dispatch({
      type: COUNTER_ACTION_TYPE.INCREASE,
      payload: 1
    });
  }

  const handleDecrease = () => {
    dispatch({
      type: COUNTER_ACTION_TYPE.DECREASE,
      payload: 1
    });
  }

  const handleDouble = () => {
    dispatch({
      type: COUNTER_ACTION_TYPE.DOUBLE,
      // payload: 0
    });
  }

  return <div>
    Count: {state.count}<br />
    <button onClick={handleIncrease}> + </button>
    <button onClick={handleDecrease}> - </button>
    <button onClick={handleDouble}> *2 </button>
  </div>;
}
