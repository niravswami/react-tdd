import React from "react";
import { CounterTwoProps } from "./counterTwoTypes";

export default function CounterTwo(props: CounterTwoProps) {
  return (
    <div>
      <h1>CounterTwo</h1>
      <p>{props.count}</p>
      {props.handleInc && <button onClick={props.handleInc}>Inc</button>}
      {props.handleDec && <button onClick={props.handleDec}>Dec</button>}
    </div>
  );
}
