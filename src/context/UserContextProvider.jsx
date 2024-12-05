import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import users from "../utilities/users";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({});

  const addUser = (newUser) => {
    setUser((prevUser) => {
      return [...prevUser, newUser];
    });
  };

  useEffect(() => {
    //newUser && addUser(newUser);
    //console.log(users, newUser);
  }, [newUser, addUser]);

  const value = { newUser, setNewUser, addUser, users };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
