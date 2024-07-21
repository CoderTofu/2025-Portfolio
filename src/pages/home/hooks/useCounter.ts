import { useState } from "react";

type Props<T> = {
  defaultCount?: T;
  count: number;
  increment: () => void;
  decrement: () => void;
};

function useCounter(defaultCount: number): Props<number> {
  const [counter, setCounter] = useState(defaultCount ?? 0);

  const increment = () => setCounter((count) => count + 1);
  const decrement = () => setCounter((count) => count - 1);

  return { count: counter, increment, decrement };
}

export default useCounter;
