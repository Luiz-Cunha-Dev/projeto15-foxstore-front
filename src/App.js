import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import HomePage from "./Pages/homePage";
import SignIn from "./Pages/signInPage";
import SignUp from "./Pages/signUp";

export default function App() {

  const tokenOnLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenOnLocalStorage)
  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }


  return (
    <>
      <UserContext.Provider value={{ token, setToken, setAndPersistToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

