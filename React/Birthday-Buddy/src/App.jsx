import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const upcomingBirthdays = [
  {
    name: "Bertie Yates",
    age: 29,
    img: "https://www.course-api.com/images/people/person-1.jpeg",
  },
  {
    name: "Hester Hogan",
    age: 32,
    img: "https://www.course-api.com/images/people/person-2.jpeg",
  },
  {
    name: "Larry Little",
    age: 36,
    img: "https://www.course-api.com/images/people/person-3.jpeg",
  },
  {
    name: "Sean Walsh",
    age: 34,
    img: "https://www.course-api.com/images/people/person-4.jpeg",
  },
  {
    name: "Lola Gardner",
    age: 29,
    img: "https://www.course-api.com/images/people/person-5.jpeg",
  },
];

function Main() {
  const nextbirthdays = upcomingBirthdays;
  const [birthdays, setBirthdays] = useState(upcomingBirthdays);

  const clearBirthdays = () => {
    setBirthdays([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <div className="bg-white rounded-md shadow-2xl w-[550px] max-w-[90%] p-6  my-16">
        <h1 className="font-medium text-3xl">
          {birthdays.length} Birthdays Today
        </h1>
        {birthdays.map((birthday) => (
          <Birthdays birthdaysObj={birthday} key={birthday.name} />
        ))}
        <div className="flex items-center justify-center w-full">
          <button
            className="bg-fuchsia-400 text-white w-full mt-6"
            onClick={clearBirthdays}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

function Birthdays({ birthdaysObj }) {
  return (
    <div>
      <div className="p-4 flex gap-2">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={birthdaysObj.img}
        ></img>
        <div>
          <p className="font-semibold text-xl">{birthdaysObj.name}</p>
          <p className="text-gray-600">{birthdaysObj.age} Years</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <Main />;
}

export default App;
