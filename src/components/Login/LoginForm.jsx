import styled from "styled-components";
import { useState } from "react";
import api from "../../services/Api";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function LoginForm() {
  const [load, setLoad] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  async function sendLogin(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post("/login", userData)
      .then((e) => {
        localStorage.setItem("token", e.data.token);
        const decodeUserData = jwt_decode(e.data.token);
        setLoginError(false);
        if (decodeUserData.twoFactorAuth) {
          navigate("/twoFactorAuth/verify");
        } else {
          navigate("/end");
        }
      })
      .catch(() => setLoginError(true));
    setLoad(false);
  }

  return (
    <LoginForms onSubmit={(event) => sendLogin(event)}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email..."
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="pasword"
        placeholder="Password..."
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      ></input>
      <button type="submit">
        {load ? <ThreeDots color="#000706" /> : <>Login</>}
      </button>
      <p>
        {loginError ? (
          <>Email ou senha incorreto, verifique seus dados</>
        ) : (
          <></>
        )}
      </p>
    </LoginForms>
  );
}

const LoginForms = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  padding: 10px;

  input {
    height: 50px;
    margin: 1% 0 10% 0;
    border-radius: 30px;
    border: none;
    padding: 10px;
  }
  label {
    font-size: 20px;
    color: #ffff;
  }

  p {
    color: red;
    font-size: 19px;
    width: 100%;
    text-align: center;
  }

  button {
    height: 70px;
    width: 100%;
    border: none;
    font-size: large;
    background-color: #bfac8b;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }
  @media (max-width: 600px) {
    height: 100%;

    button {
      margin-top: 10px;
    }
  }
`;
