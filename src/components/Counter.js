import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = (val) => {
    dispatch(counterActions.increase(val)); //    { type : "SOME_UNIQUE_ID", payload : val }
  };

  const hideHandler = () => {
    dispatch({ type: "toggle" });
  };

  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter {show} </h1>

      {!show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={() => increaseHandler(5)}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
