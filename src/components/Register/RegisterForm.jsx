import styled from "styled-components";
import { useState } from "react";
import api from "../../services/Api";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [load, setLoad] = useState(false);
  const [registerError, setregisterError] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  async function sendRegister(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post("/register", userData)
      .then((e) => {
        console.log(e.data);
        setregisterError(false);
        navigate("/");
      })
      .catch(() => setregisterError(true));
    setLoad(false);
    console.log("Registro");
  }
  return (
    <RegisterForms onSubmit={(event) => sendRegister(event)}>
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
      <label htmlFor="repeatPassword">Repeat password:</label>
      <input
        id="repeatPassword"
        type="password"
        name="repeatPassword"
        placeholder="Repeat password..."
        value={userData.repeatPassword}
        onChange={(e) =>
          setUserData({ ...userData, repeatPassword: e.target.value })
        }
      ></input>
      <button type="submit">
        {load ? <ThreeDots color="#000706" /> : <>Register</>}
      </button>
      <p>{registerError ? <>Verifique seus dados</> : <></>}</p>
    </RegisterForms>
  );
}

const RegisterForms = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  padding: 10px;

  input {
    height: 50px;
    margin: 1% 0 5% 0;
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
