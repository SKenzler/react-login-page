import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider.jsx";
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
