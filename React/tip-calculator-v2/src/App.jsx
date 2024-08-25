import FriendServiceReview from "./components/FriendServiceReview";
import Header from "./components/Header";
import Reset from "./components/Reset";
import Service from "./components/Service";
import Total from "./components/Total";
import TotalBill from "./components/TotalBill";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [serviceReview, setserviceReview] = useState(0);
  const [friendServicePercentage, setFriendServicePercentage] = useState(0);

  return (
    <div className="bg-gray-900 min-h-screen w-full font-josefin">
      <div className="max-w-[1500px] w-[90%] mx-auto flex flex-col gap-8">
        <Header />
        <TotalBill setBill={setBill} bill={bill} />
        <Service
          setserviceReview={setserviceReview}
          serviceReview={serviceReview}
        />
        <FriendServiceReview
          setFriendServicePercentage={setFriendServicePercentage}
          friendServicePercentage={friendServicePercentage}
        />
        <Total
          serviceReview={serviceReview}
          friendServicePercentage={friendServicePercentage}
          bill={bill}
        />
        <Reset
          setBill={setBill}
          setFriendServicePercentage={setFriendServicePercentage}
          setserviceReview={setserviceReview}
        />
      </div>
    </div>
  );
}

export default App;
