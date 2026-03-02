import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState("ahmad");
  const users = [
    { id: 1, name: "ahmad", age: 20 },
    { id: 2, name: "hasan", age: 21 },
    { id: 3, name: "ali", age: 22 },
  ];

  return (
    <>
      <Header user={userData} setUser={setUserData} />
      <UserCard userData={users} />
      <h1>Hello today we will discuss about components in react</h1>
    </>
  );
}

export default App;
