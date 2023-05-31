import styled from "styled-components";
import { useState } from "react";
import api from "../../services/Api";
import { ThreeDots } from "react-loader-spinner";

export default function ForgetPassword() {
  const [load, setLoad] = useState(false);
  const [userSucess, setuserSucess] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
  });
  async function sendReset(event) {
    event.preventDefault();
    setLoad(true);
    await api
      .post(`/forgetPassword`, userData)
      .then((e) => {
        console.log(e.data);
        setuserSucess(true);
      })
      .catch(() => setuserSucess(false));
    setLoad(false);
  }
  return (
    <ForgetPasswordForm onSubmit={(event) => sendReset(event)}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email..."
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      ></input>
      <button type="submit">
        {load ? <ThreeDots color="#000706" /> : <>Send</>}
      </button>
      <p>{userSucess ? <>verifique seu email</> : <></>}</p>
    </ForgetPasswordForm>
  );
}

const ForgetPasswordForm = styled.form`
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
    color: green;
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
  @media (max-width: 700px) {
    height: 100%;

    button {
      margin-top: 10px;
    }
  }
`;
