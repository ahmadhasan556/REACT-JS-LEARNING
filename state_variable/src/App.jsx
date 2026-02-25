import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });
  const [isOn, setIsOn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const assignUserName = () => {
    setUser({
      ...user,
      name: "Ahmad",
    });
  };
  const lightON = () => {
    setIsOn(true);
  };
  const lightOF = () => {
    setIsOn(false);
  };
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className={`flex min-h-screen items-center flex-col gap-2 ${
          isDark
            ? "bg-black transition duration-700"
            : "bg-white transition duration-700"
        } p-2`}
      >
        <div className="flex gap-2 items-center">
          <button
            onClick={increment}
            className="bg-blue-700 px-2 py-1 rounded-lg text-white cursor-pointer"
          >
            +
          </button>
          <span className={`${isDark ? "text-white" : ""}`}>{count}</span>
          <button
            onDoubleClick={decrement}
            className="bg-blue-700 px-2 py-1 rounded-lg text-white cursor-pointer"
          >
            -
          </button>
        </div>
        <button
          onClick={assignUserName}
          className="bg-blue-700 px-2 py-1 rounded-lg text-white cursor-pointer"
        >
          Assign Name
        </button>
        <span>{user.name}</span>

        {/* <button onClick={lightON}>Light on</button> */}
        {/* <button onClick={lightOF}>Light of</button> */}
        <button
          onClick={() => setIsOn(!isOn)}
          className="bg-blue-700 px-2 py-1 rounded-lg text-white cursor-pointer"
        >
          Switch
        </button>
        <p className={`${isDark ? "text-white" : ""}`}>
          {isOn ? "Light is On" : "Light is Off"}
        </p>
        <button
          className="bg-blue-700 px-2 py-1 rounded-lg text-white cursor-pointer"
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Change Mood
        </button>
      </div>
    </>
  );
}

export default App;
