import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../services/Api";
import { ThreeDots } from "react-loader-spinner";

export default function LoginForm() {
  const [load, setLoad] = useState(false);
  const [loginError, setLoginError] = useState(false);

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
        console.log(e);
        setLoginError(false);
      })
      .catch(() => setLoginError(true));
    setLoad(false);
    console.log("login");
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
      <Link to="/forgetPassword">Esqueci minha senha</Link>
      <Link to="/register">Ainda não possui cadastro?</Link>
    </LoginForms>
  );
}

const LoginForms = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
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

  a {
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: #ffff;
    margin-top: 5%;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
      text-decoration: underline;
    }
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
    height: 85%;

    button {
      margin-top: 10%;
    }
  }
`;
