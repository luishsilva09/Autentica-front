import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function End() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <Container>
      <h1>Congrats!!!</h1>
      <h2>All good.</h2>
      <Link to="/twoFactorAuth/enable">ativar dois fatores</Link>
      <IoMdExit onClick={() => logOut()} size={50} className="icon" />
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

  .icon {
    color: #fff;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }
`;
