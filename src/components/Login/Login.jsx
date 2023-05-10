import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <BoxLogin>
        <p>Login</p>
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
  height: 70%;
  width: 500px;
  border-radius: 50px;
  padding: 1%;

  p {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 70%;
  }
  @media (max-height: 600px) {
    height: 100vh;
  }
`;
