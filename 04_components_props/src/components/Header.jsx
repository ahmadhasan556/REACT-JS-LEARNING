import React from "react";

const Header = ({ user, setUser }) => {
  const changeUserName = () => {
    setUser("hasan");
  };
  return (
    <>
      <h1>Hello {user}</h1>
      <button onClick={changeUserName}>Change UserName</button>
    </>
  );
};
export default Header;
