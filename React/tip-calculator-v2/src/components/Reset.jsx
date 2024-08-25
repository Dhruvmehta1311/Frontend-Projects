import React from "react";

const Reset = ({ setserviceReview, setFriendServicePercentage, setBill }) => {
  function resetValues() {
    setserviceReview(0);
    setFriendServicePercentage(0);
    setBill("");
  }
  return (
    <div>
      <button
        onClick={resetValues}
        className="text-white bg-green-600 px-8 py-2 hover:bg-green-400 text-xl"
      >
        Reset All
      </button>
      ;
    </div>
  );
};

export default Reset;
