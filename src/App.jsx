import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import { useState } from "react";

const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "Why use React?",
    content:
      "React is a favorite among developers due to its simplicity and flexibility.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      {/* <Button content="Button" link="/" /> */}
      <Accordion items={items} />
      <div className="flex flex-col items-center justify-center my-2">
        <button
          onClick={() => setShowAlert(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show Alert
        </button>

        {showAlert && (
          <Alert
            message="Action was successful!"
            type="success"
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
