import { useState } from "react";
import { UserCounterProps } from "./userCounter.types";

export default function useCounter({
  initialCount = 0,
}: UserCounterProps = {}) {
  const [count, setCount] = useState(initialCount);
  const incCount = () => setCount((prev) => prev + 1);
  const decCount = () => setCount((prev) => prev - 1);

  return { count, incCount, decCount };
}
