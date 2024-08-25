import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income ➰",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // console.log(messages.length);
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
    <div className="h-screen text-white bg-light-gray flex items-center justify-center flex-col ">
      <div className="flex justify-center items-center text-center max-w-[600px] w-[90%] ">
        <div className="w-full flex justify-end items-center">
          <p
            onClick={() => {
              setIsOpen((checkIsOpen) => !checkIsOpen);
            }}
            className="text-black text-3xl cursor-pointer"
          >
            {isOpen ? <RxCross2 /> : <MdOutlineMenu />}
          </p>
        </div>
      </div>
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
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="flex items-center justify-between w-full">
            <Button bgColor="{#7950f2" onClick={handlePrevious}>
              👈 Previous
            </Button>
            <Button bgColor="#7950f2" onClick={handleNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div>
      <h1 className="font-semibold text-lg text-black">
        Step {step}: {children}
      </h1>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2" }}
      className="font-semibold text-sm px-3 py-2 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
