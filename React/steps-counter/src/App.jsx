import { useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  function handleIncrement() {
    setCounter(counter + steps);
  }
  function handleDecrement() {
    setCounter(counter - steps);
  }

  function handleStepsChange(e) {
    setSteps(Number(e.target.value));
  }

  function handleReset() {
    setCounter(0);
    setSteps(1);
  }

  return (
    <div className="bg-purple-400 h-screen text-black flex items-center justify-center">
      <div className="rounded-md py-4 bg-zinc-200 min-h-[350px] max-w-[90%] w-[480px] flex flex-col items-center justify-center gap-6 ">
        <h1 className="font-bold text-3xl">Counter App</h1>
        <h1 className="font-semibold text-2xl">Steps</h1>
        <div className="flex gap-4 sm:gap-8 px-8">
          <input
            value={steps}
            onChange={handleStepsChange}
            type="range"
            min="0"
            max="10"
          />

          <h1 className="font-bold text-5xl">{steps}</h1>
        </div>
        <h1 className="font-semibold text-2xl">Counter</h1>
        <div className="flex gap-4 sm:gap-8 px-6">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-600  text-white rounded-md w-full"
          >
            <span className="font-semibold text-xl">-</span>
          </button>
          <input
            className="bg-green-500 text-center w-full rounded-md px-2 text-white"
            type="text"
            value={counter}
            onChange={(e) => setCounter(Number(e.target.value))}
          />
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-600 w-full text-white rounded-md"
          >
            +
          </button>
        </div>
        <p className="font-semibold">
          <span className="font-semibold">
            {counter === 0
              ? "Today is "
              : counter > 0
              ? `${counter} days from today `
              : `${Math.abs(counter)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {counter !== 0 || steps !== 1 ? (
          <button
            onClick={handleReset}
            className="h-[38px] bg-blue-600 px-6 rounded-md text-center text-white"
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default App;
