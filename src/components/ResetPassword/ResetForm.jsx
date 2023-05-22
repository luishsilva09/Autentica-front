import styled from "styled-components";
import { useState } from "react";
import api from "../../services/Api";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetForm() {
  const [load, setLoad] = useState(false);
  const [userError, setLoginError] = useState(false);
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    newPassword: "",
  });
  async function sendReset(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post(`/resetPassword/${resetToken}`, userData)
      .then((e) => {
        console.log(e.data);
        setLoginError(false);
        navigate("/");
      })
      .catch(() => setLoginError(true));
    setLoad(false);
    console.log("reset");
  }
  return (
    <LoginForms onSubmit={(event) => sendReset(event)}>
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
        placeholder="New password..."
        value={userData.newPassword}
        onChange={(e) =>
          setUserData({ ...userData, newPassword: e.target.value })
        }
      ></input>
      <label htmlFor="repeaPassword">Repeat password:</label>
      <input
        id="repeatPassword"
        type="repeatPassword"
        name="repeatPasword"
        placeholder="Repeat new password..."
        value={userData.newPassword}
        onChange={(e) =>
          setUserData({ ...userData, newPassword: e.target.value })
        }
      ></input>
      <button type="submit">
        {load ? <ThreeDots color="#000706" /> : <>Reset</>}
      </button>
      <p>{userError ? <>verifique seus dados</> : <></>}</p>
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
