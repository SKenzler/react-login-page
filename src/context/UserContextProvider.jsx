import React, { useCallback } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState([]);
  const addUser = (newUser) => [...newUser, { newUser }];

  return (
    <UserContext.Provider value={{ addUser }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
