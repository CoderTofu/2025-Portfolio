import "./index.css";

import Logos from "./components/Logos";
import useCounter from "./hooks/useCounter";

function Home() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <Logos />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>Increment count: {count}</button>
        <button onClick={decrement}>Decrement count: {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
