/* eslint-disable react/prop-types */
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Our chairs are assembled in our state-of-the-art facility located in Germany, ensuring the highest quality and craftsmanship.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "You have 30 days from the date of delivery to return your chair for a full refund, provided it is in its original condition.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Yes, we ship to many countries outside the EU. Please check our shipping policy for more details on international shipping.",
  },
];

function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    // <AccordianComponent />
    <div className="min-h-screen bg-blue-200 gap-4 py-7 flex flex-col items-center justify-center">
      {data.map((el, i) => (
        <AccordionComponent
          setCurOpen={setCurOpen}
          curOpen={curOpen}
          title={el.title}
          key={i}
          index={i}
          text={el.text}
        />
      ))}
    </div>
  );
}

function AccordionComponent({ title, text, index, curOpen, setCurOpen }) {
  const isOpen = curOpen === index;

  function handleIsOpen() {
    setCurOpen(isOpen ? null : index);
  }

  return (
    <>
      <div
        onClick={handleIsOpen}
        className={`cursor-pointer shadow-xl rounded-md  bg-white w-[90%] py-4 pl-4 text-center max-w-[530px] mx-auto ${
          isOpen ? "border-t-8 border-t-green-300 bg-green-100" : ""
        }`}
      >
        <section
          className={`flex justify-between gap-4 px-6 font-semibold sm:font-bold text-sm sm:text-xl ${
            isOpen ? "text-green-600 " : "text-gray-900"
          }`}
        >
          <p className="text-gray-900">{index + 1}</p>
          <p>{title}</p>
          <p className="text-center">{isOpen ? "-" : "+"}</p>
        </section>
        {isOpen ? (
          <div className="p-4 border-t border-gray-200">
            <p>{text}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
