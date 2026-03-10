import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   console.log("use effect");
  // }, [count]);
  // async function getWeatherData() {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/1"
  //     );
  //     setData(res.data);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   getWeatherData();
  // }, []);

  // use memo hook
  // const doubleCount = useMemo(() => {
  //   console.log("double increment");
  //   return count * 2;
  // }, [count]);
  // console.log(count);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const increment = useCallback(() => {
    // console.log(count);
    setCount((prev) => prev + 1);
  }, []);

  const handleFocus = () => {
    console.log("by ref");
    inputRef.current.focus();
  };
  const scrollToDiv = () => {
    divRef.current.scrollIntoView();
  };

  // const doubleCount = count * 2;
  // const doubleCount = useMemo(() => {
  //   console.log("double increment");
  //   return count * 2;
  // }, [count]);
  // console.log(count);
  // console.log(doubleCount);
  return (
    <>
      <div style={{ scrollBehavior: "smooth" }}>
        <h1>Today we will discuss about the hooks</h1>
        <button onClick={scrollToDiv}>Scroll</button>
        <div
          style={{
            height: "1000px",
            backgroundColor: "red",
            borderColor: "red",
          }}
        >
          ds
        </div>

        <div ref={divRef}>Target</div>
      </div>
      {/* <p>{count}</p> */}
      {/* <p>Count useMemo: {doubleCount}</p> */}
      {/* <p>{text}</p> */}
      {/* <input type="text" ref={inputRef} placeholder="write anything" /> */}
      {/* <button onClick={handleFocus}>Focus</button> */}
      {/* <button onClick={getWeatherData}>
        {loading ? "Getting data" : "Get Data"}
      </button> */}
      {/* {data ? (
        <div>
          <h2>Todo Data</h2>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading data</p>
      )} */}
    </>
  );
}

export default App;
