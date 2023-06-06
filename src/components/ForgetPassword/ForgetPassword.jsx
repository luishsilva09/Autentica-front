import styled from "styled-components";
import ForgetPasswordForm from "./ForgetPasswordForm";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  return (
    <Container>
      <Box>
        <h1>Forget password</h1>
        <ForgetPasswordForm />
        <Link to="/">Home</Link>
      </Box>
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

const Box = styled.div`
  background-color: #134647;
  height: 40%;
  width: 450px;
  border-radius: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  max-height: 300px;

  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 37%;
    max-height: 300px;
    padding: 2%;
  }
  @media (max-height: 700px) {
    height: 100vh;
  }
`;
