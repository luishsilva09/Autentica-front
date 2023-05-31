import styled from "styled-components";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <BoxLogin>
        <h1>Login</h1>
        <LoginForm />
        <Link to="/forgetPassword">Esqueci minha senha</Link>
        <Link to="/register">Ainda não possui cadastro?</Link>
      </BoxLogin>
    </Container>
  );
}

const Container = styled.div`
  background-color: #00272d;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxLogin = styled.div`
  background-color: #134647;
  height: 65%;
  width: 450px;
  border-radius: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  max-height: 450px;

  a {
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: #ffff;
    margin-top: 5px;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
      text-decoration: underline;
    }
  }
  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    padding: 4%;
    max-height: 500px;
  }
  @media (max-height: 700px) {
    height: 100vh;
  }
`;
