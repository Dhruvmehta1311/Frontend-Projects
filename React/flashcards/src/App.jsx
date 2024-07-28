import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleState(e) {
    console.log(e.target.id);
    setSelectedId(Number(e.target.id));
  }

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-wrap gap-4 max-w-[1200px] mx-auto py-4">
      {questions.map((question) => (
        <div
          id={question.id}
          // onClick={(e) => setSelectedId(Number(e.target.id))}
          onClick={() => handleClick(question.id)}
          className={`shadow-lg 
            ${
              question.id === selectedId
                ? "bg-red-700 text-white"
                : "bg-zinc-300"
            }
           h-[200px] flex items-center justify-center p-6 w-[300px] `}
          key={question.id}
        >
          <p id={question.id} className="font-semibold">
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
