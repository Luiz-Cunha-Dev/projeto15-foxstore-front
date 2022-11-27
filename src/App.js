import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import HomePage from "./Pages/homePage";
import SignIn from "./Pages/signInPage";
import SignUp from "./Pages/signUp";
import ProductPage from "./Pages/productPage";
import CartPage from "./Pages/cartPage";
import CheckoutPage from "./Pages/checkoutPage";
import ListProductsPage from "./Pages/listProductsPage";
import SearchPage from "./Pages/searchPage";
import axios from "axios";

export default function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }
  function sendCart(name) {
    const Url = "https://foxstore.onrender.com/cart"

    const body = {
        "name": name,
        "qtde": 1
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(Url, body, config)

    promise.then((res) => {
        console.log(res.data)
    });
    promise.catch((erro) => {
        console.log(erro)
    });
  }


  return (
    <>
      <UserContext.Provider value={{ token, setToken, setAndPersistToken, sendCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/listProducts/:categorie" element={<ListProductsPage />}></Route>
            <Route path="/searchPage/:search" element={<SearchPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

