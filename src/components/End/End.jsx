import styled from "styled-components";
import { Link } from "react-router-dom";

export default function End() {
  return (
    <Container>
      <h1>Congrats!!!</h1>
      <h2>All good.</h2>
      <Link to="/twoFactorAuth/enable">ativar dois fatores</Link>
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
  flex-direction: column;

  h1 {
    font-size: 60px;
    color: #ffffff;
  }

  h2 {
    font-size: 50px;
    color: #ffffff;
  }
`;
