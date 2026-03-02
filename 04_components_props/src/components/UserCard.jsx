import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {userData.map((user, index) => {
        return (
          <>
            <div
              key={index}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                width: "150px",
                textAlign: "center",
              }}
            >
              <h2>User: {user.name}</h2>
              <h3>Age: {user.age}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserCard;
