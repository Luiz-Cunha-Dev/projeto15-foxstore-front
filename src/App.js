import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import SignIn from "./Pages/signInPage";
import SignUp from "./Pages/signUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

