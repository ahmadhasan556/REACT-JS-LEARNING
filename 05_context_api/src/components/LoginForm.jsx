import React, { useContext, useState } from "react";
import { UserProvider } from "../context/UserContext";

const LoginForm = () => {
  const { setUserInfo } = useContext(UserProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email == "ah@gmail.com" && password == "123456") {
      setUserInfo({ email: email, name: "Ahmad", age: 25 });
      alert("Logged in ");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
