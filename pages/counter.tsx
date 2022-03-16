import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../store/counter/actions';

const Counter = () => {
  const { value } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return <>
    <h1>{value}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
  </>;
};
export default Counter;
