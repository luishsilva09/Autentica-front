import "../assets/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import End from "./End/End";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import ResetPassword from "./ResetPassword/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Login} path="/" />
          <Route Component={Register} path="/register" />
          <Route Component={ForgetPassword} path="/forgetPassword" />
          <Route Component={ResetPassword} path="/resetPassword/:resetToken" />
          <Route Component={End} path="/end" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
