import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import HomePage from "./Pages/homePage";
import SignIn from "./Pages/signInPage";
import SignUp from "./Pages/signUp";
import ProductPage from "./Pages/productPage";
import CartPage from "./Pages/cartPage";

export default function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
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
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

