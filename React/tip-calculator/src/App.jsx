import { BiDollar } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

import logo from "./assets/images/logo.svg";
import { useState } from "react";

const tips = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const tipAmountPerPerson =
    (parseFloat(bill) * (parseFloat(tipPercentage) / 100)) / numberOfPeople ||
    0;
  const totalPerPerson =
    parseFloat(bill) / parseInt(numberOfPeople) + tipAmountPerPerson || 0;

  function handleReset() {
    setNumberOfPeople(0);
    setTipPercentage(0);
    setBill(0);
  }
  return (
    <div className="bg-light-grayish-cyan min-h-screen flex flex-col items-center justify-center gap-10 p-2">
      <img src={logo} />
      <main className="bg-white p-4 flex md:flex-row flex-col gap-6 rounded-2xl">
        {/* Left Section */}
        <div className="flex flex-col gap-5 md:w-1/2">
          {/* Bill */}
          <div className="flex flex-col gap-2">
            <p className="font-mono font-semibold text-xs text-dark-grayish-cyan">
              Bill
            </p>

            <section className="relative">
              <input
                onChange={(e) => setBill(parseFloat(e.target.value))}
                placeholder="0"
                type="number"
                value={bill}
                className="border h-[38px] w-full rounded text-right outline-strong-cyan font-bold bg-very-light-grayish-cyan px-2 text-very-dark-cyan"
              />
              <BiDollar className="absolute top-2.5 left-2 text-light-grayish-cyan" />
            </section>
          </div>
          {/* Selected Tip */}
          <section>
            <p className="font-mono text-dark-grayish-cyan">Selected Tip %</p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              {tips.map((d, i) => (
                <button
                  onClick={() => setTipPercentage(d)}
                  className={`rounded font-bold ${
                    tipPercentage === d
                      ? "bg-light-grayish-cyan text-dark-grayish-cyan"
                      : "bg-very-dark-cyan text-white"
                  } w-full h-[38px] hover:bg-light-grayish-cyan hover:text-dark-grayish-cyan font-semibold`}
                  key={i}
                >
                  {d}%
                </button>
              ))}

              <input
                onChange={(d) => setTipPercentage(Number(d.target.value))}
                placeholder="Custom"
                value={tipPercentage}
                type="number"
                className="border h-[32px] w-f rounded outline-strong-cyan text-bold bg-very-light-grayish-cyan px-2 "
              />
            </div>
          </section>
          {/* Number of People */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs font-semibold text-dark-grayish-cyan">
              Number of People
            </p>
            <section className="relative">
              <input
                onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                placeholder="0"
                type="number"
                value={numberOfPeople}
                className="border h-[38px] w-full rounded text-right outline-strong-cyan bg-very-light-grayish-cyan px-2 font-bold text-very-dark-cyan"
              />
              <IoPerson className="absolute top-2.5 left-2.5 text-light-grayish-cyan" />
            </section>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-very-dark-cyan px-5 pt-8 pb-6  flex flex-col md:justify-between gap-10 md:gap-0 md:w-1/2 rounded-xl">
          <div className="flex flex-col gap-5">
            <section className="flex justify-between items-center">
              <div>
                <p className="text-white">Tip Amount</p>
                <p className="text-white font-mono text-xs">/ Person</p>
              </div>
              <div className="text-strong-cyan text-4xl font-semibold">
                ${tipAmountPerPerson.toFixed(2)}
              </div>
            </section>
            <section className="flex justify-between items-center">
              <div>
                <p className="text-white">Total</p>
                <p className="text-white font-mono text-xs">/ Person</p>
              </div>
              <div className="text-strong-cyan text-4xl font-semibold">
                ${totalPerPerson.toFixed(2)}
              </div>
            </section>
          </div>
          <button
            onClick={handleReset}
            className="bg-strong-cyan w-full rounded-md h-[30px] hover:bg-light-grayish-cyan text-very-dark-cyan font-bold"
          >
            RESET
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
