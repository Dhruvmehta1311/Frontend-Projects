import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income ➰",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  console.log(messages.length);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < messages.length) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }
  return (
    <div className="h-screen text-white bg-light-gray flex items-center justify-center flex-col relative">
      <p
        onClick={() => {
          setIsOpen((checkIsOpen) => !checkIsOpen);
        }}
        className="absolute top-[23%] text-black text-right w-[600px] max-w-[90%] text-3xl cursor-pointer"
      >
        &times;
      </p>
      {isOpen && (
        <div className="p-12 w-[600px] max-w-[90%] h-fit flex flex-col gap-8 items-center justify-between bg-zinc-200">
          <div className="flex items-center justify-between w-full text-black ">
            <div
              className={`${
                step >= 1 ? "bg-custom-purple" : "bg-zinc-300"
              } rounded-full   font-semibold text-lg h-10 w-10 flex items-center justify-center cursor-pointer`}
            >
              1
            </div>
            <div
              className={`${
                step >= 2 ? "bg-custom-purple" : "bg-zinc-300"
              } rounded-full  w-10 font-semibold text-lg h-10 flex items-center justify-center cursor-pointer`}
            >
              2
            </div>
            <div
              className={`${
                step >= 3 ? "bg-custom-purple" : "bg-zinc-300"
              } rounded-full  w-10 font-semibold text-lg h-10 flex items-center justify-center cursor-pointer`}
            >
              3
            </div>
          </div>
          <h1 className="font-semibold text-lg text-black">
            Step {step} : {messages[step - 1]}
          </h1>
          <div className="flex items-center justify-between w-full">
            <button
              style={{ backgroundColor: "#7950f2" }}
              className="font-semibold text-sm px-3 py-2 rounded-md"
              onClick={handlePrevious}
              // onMouseEnter={() => {
              //   alert("Mouse has Entered.");
              // }}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2" }}
              className="font-semibold text-sm px-3 py-2 rounded-md"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
