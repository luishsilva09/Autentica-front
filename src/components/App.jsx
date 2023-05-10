import "../assets/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={Register} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
