import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import "./../../index.css";

const Counter: React.FC = () => {
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch();

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <div className="counter-container">{count}</div>
      <div className="btn-container">
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={resetAll}>Reset</button>
        <div>
          <input
            type={"number"}
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(Number(e.target.value))
            }
          />
          <button onClick={() => dispatch(incrementByAmount(amount))}>
            incrementByAmount
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;