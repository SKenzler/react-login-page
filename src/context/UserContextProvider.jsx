import React, { useEffect, useState, useRef } from "react";
import UserContext from "./UserContext";
import userData from "../utilities/users";

const UserContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState([]);
  const [users, setUsers] = useState(userData);
  const mountRef = useRef(false);

  useEffect(() => {
    if (mountRef.current) {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } else {
      mountRef.current = true;
    }
    console.log("this useEffect ran", users);
  }, [newUser]);

  const value = { newUser, setNewUser, users };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
