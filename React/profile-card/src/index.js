import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const userInformation = [
  {
    id: 1,
    name: "Dhruv",
    desc: "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
  },
];

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "bg-yellow-500",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "bg-red-500",
  },
  {
    skill: "Design",
    level: "advanced",
    color: "bg-green-500",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "bg-black",
  },
  {
    skill: "React",
    level: "advanced",
    color: "bg-lime-600",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "bg-pink-500",
  },
];

function App() {
  return (
    <>
      <Skeleton />
    </>
  );
}

function Skeleton() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-white w-[480px] max-w-[90%] min-h-[560px] rounded-lg p-4 flex flex-col gap-4 items-center">
        <MainImage />

        {userInformation.map((singleUser) => (
          <UserInfo userDataObj={singleUser} key={singleUser.id} />
        ))}

        <div className="flex flex-wrap p-4">
          {skills.map((skill) => (
            <UserSkills skillsObj={skill} key={skill.skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
function UserInfo({ userDataObj }) {
  console.log(userDataObj);
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-center">{userDataObj.name}</h1>
      <p className="text-center">{userDataObj.desc}</p>
    </div>
  );
}

function UserSkills({ skillsObj }) {
  console.log(skillsObj);
  return (
    <button
      className={`mt-4 ${skillsObj.color} px-3 py-2 rounded-md mr-4  text-white`}
    >
      {skillsObj.skill} {skillsObj.level === "advanced" ? "💪" : ""}{" "}
      {skillsObj.level === "intermediate" ? "👍" : ""}
      {skillsObj.level === "beginner" ? "🐣" : ""}
    </button>
  );
}

function MainImage() {
  return (
    <div className=" flex justify-center">
      <img
        className="max-h-40 rounded-full"
        src="https://avatars.githubusercontent.com/u/99068087?v=4"
        alt="Dhruv"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
