import styled from "styled-components";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Container>
      <BoxLogin>
        <h1>Login</h1>
        <LoginForm />
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

  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 65%;
  }
  @media (max-height: 600px) {
    height: 100vh;
  }
`;
