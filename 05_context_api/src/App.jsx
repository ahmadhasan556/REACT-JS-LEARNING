import { useContext, useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm";
import { UserProvider } from "./context/UserContext";
import Chatbot from "./components/Chatbot";

function App() {
  const { userInfo } = useContext(UserProvider);

  // if (!userInfo) {
  //   return (
  //     <>
  //       <h1>Context Api (User Not Logged in)</h1>
  //       <LoginForm />
  //     </>
  //   );
  // }

  return (
    <>
      <h1>Welcome to appp</h1>
      {/* <h2>Name: {userInfo.name}</h2> */}
      <Chatbot />
    </>
  );
}

export default App;
