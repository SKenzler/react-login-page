import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import users from "../utilities/users";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({});

  const addUser = useCallback(
    (newUser) => {
      setUser((prevUser) => [...prevUser, newUser]);
    },
    [setUser]
  );

  useEffect(() => {
    if (newUser.usename && newUser.password) {
      addUser(newUser);
    }
  }, [newUser.username, newUser.password, addUser]);

  const value = { newUser, setNewUser, addUser, users };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
