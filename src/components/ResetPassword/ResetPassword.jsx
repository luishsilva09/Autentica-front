import styled from "styled-components";
import ResetForm from "./ResetForm";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <Container>
      <BoxReset>
        <h1>Reset password</h1>
        <ResetForm />
        <Link to="/">Home</Link>
      </BoxReset>
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

const BoxReset = styled.div`
  background-color: #134647;
  height: 78%;
  width: 450px;
  border-radius: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  max-height: 550px;

  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    padding: 4%;
  }
  @media (max-height: 600px) {
    height: 100vh;
  }
`;
