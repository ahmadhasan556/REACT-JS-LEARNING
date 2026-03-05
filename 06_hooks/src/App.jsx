import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   console.log("use effect");
  // }, [count]);
  async function getWeatherData() {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setData(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getWeatherData();
  }, []);

  const increment = () => {
    console.log(count);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    console.log(count);
  };
  // console.log(count);

  return (
    <>
      <h1>Today we will discuss about the hooks</h1>

      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      {/* <button onClick={getWeatherData}>
        {loading ? "Getting data" : "Get Data"}
      </button> */}
      {data ? (
        <div>
          <h2>Todo Data</h2>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading data</p>
      )}
    </>
  );
}

export default App;
