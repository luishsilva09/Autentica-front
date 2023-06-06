import { useState } from "react";
import styled from "styled-components";
import api from "../../services/Api";
import { useNavigate } from "react-router-dom";

export default function TwofactorAuthVerify() {
  const [token, setToken] = useState({ token: "" });
  const navigate = useNavigate();
  const [errorVerify, setErrorVerify] = useState(false);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  async function verifyToken(event) {
    event.preventDefault();
    await api
      .post("/twoFactorAuth/verify", token, config)
      .then(() => navigate("/end"))
      .catch(() => setErrorVerify(true));
  }
  return (
    <Container>
      <Box>
        <h1>Verify 2FA</h1>
        <form onSubmit={(event) => verifyToken(event)}>
          <input
            type="number"
            placeholder="PIN"
            name="Pin"
            value={token.token}
            onChange={(e) => setToken({ ...token, token: e.target.value })}
          ></input>
          <button type="submit">Verificar</button>
          <p>{errorVerify ? <>Dados inválido</> : <></>}</p>
        </form>
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
  height: 20%;
  width: 450px;
  border-radius: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 220px;

  input {
    height: 50px;
    margin: 1% 0 5% 0;
    border-radius: 30px;
    border: none;
    padding: 10px;
  }
  p {
    color: red;
    font-size: 19px;
    width: 100%;
    text-align: center;
    margin-top: 3px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 30px;
    width: 100%;
    text-align: center;
  }
  button {
    height: 70px;
    width: 80%;
    border: none;
    font-size: large;
    background-color: #bfac8b;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      filter: brightness(130%);
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 55%;
    padding: 4%;
    max-height: 220px;
  }
`;
