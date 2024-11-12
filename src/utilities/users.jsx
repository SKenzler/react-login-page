import { useId } from "react";

const id = new Date().getTime();

const users = [
  { user_id: { id }, username: "admin", password: "admin" },
  { user_id: { id }, username: "user", password: "user" },
];

export default users;
