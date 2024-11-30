import React, { useCallback } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);

  // const addUser = (prevUser) => [...prevUser, { newUser }];

  return (
    <UserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
