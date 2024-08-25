import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  function successMessage() {
    toast.success("This is a Success Message..");
  }
  function errorMessage() {
    toast.error("This is a Error Message..");
  }
  function warningMessage() {
    toast.warning("This is a Warning Message..");
  }
  function infoMessage() {
    toast.info("This is an Info Message..");
  }
  return (
    <div className="bg-gray-800 w-full h-screen text-white flex items-center">
      <div className="max-w-[700px] w-full mx-auto flex flex-col items-center gap-4">
        <button
          className="bg-green-600 px-2 py-4 rounded w-[270px] md:w-1/2"
          onClick={successMessage}
        >
          Click here for Success Message
        </button>
        <button
          className="bg-red-600 px-2 py-4 rounded w-[270px] md:w-1/2"
          onClick={errorMessage}
        >
          Click here for Error Message
        </button>
        <button
          className="bg-yellow-600 px-2 py-4 rounded w-[270px] md:w-1/2"
          onClick={warningMessage}
        >
          Click here for Warning Message
        </button>
        <button
          className="bg-blue-600 px-2 py-4 rounded w-[270px] md:w-1/2"
          onClick={infoMessage}
        >
          Click here for Info Message
        </button>
      </div>
    </div>
  );
}

export default App;
