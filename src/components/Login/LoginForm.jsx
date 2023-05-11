import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <LoginForms>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email..."
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="pasword"
        placeholder="Password..."
      ></input>
      <button type="submit">Login</button>
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

  button {
    height: 70px;
    width: 100%;
    border: none;
    font-size: large;
    background-color: #bfac8b;
    border-radius: 30px;

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
