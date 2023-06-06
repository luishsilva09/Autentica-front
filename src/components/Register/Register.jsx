import styled from "styled-components";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <Container>
      <BoxRegister>
        <h1>Register</h1>
        <RegisterForm />
        <Link to="/">Já possui cadastro? Entre aqui.</Link>
      </BoxRegister>
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

const BoxRegister = styled.div`
  background-color: #134647;
  height: 70%;
  width: 450px;
  border-radius: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  max-height: 500px;

  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    max-height: 550px;
    height: 65%;
    padding: 4%;
  }
  @media (max-height: 700px) {
    height: 100vh;
  }
`;
