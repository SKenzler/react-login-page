import React, { useEffect, useState, useRef } from "react";
import UserContext from "./UserContext";
import users from "../utilities/users";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({});
  const prevUser = useRef(newUser);

  const addUser = (newUser) => {
    setUser((prevUser) => {
      return [...prevUser, newUser];
    });
  };

  useEffect(() => {
    if (newUser !== prevUser.current) {
      addUser(newUser);
      prevUser.current = newUser;
      console.log(newUser, users);
    }
  }, [newUser]);

  const value = { newUser, setNewUser, addUser, users };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
