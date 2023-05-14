import styled from "styled-components";
import ForgetPasswordForm from "./ForgetPasswordForm";

export default function ForgetPassword() {
  return (
    <Container>
      <Box>
        <h1>Forget password</h1>
        <ForgetPasswordForm />
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
  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 40%;
  }
  @media (max-height: 600px) {
    height: 100vh;
  }
`;
