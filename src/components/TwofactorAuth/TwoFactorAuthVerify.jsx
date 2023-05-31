import { useState } from "react";
import styled from "styled-components";
import api from "../../services/Api";

export default function TwofactorAuthVerify() {
  const [token, setToken] = useState({ token: "" });
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  async function verifyToken(event) {
    event.preventDefault();
    await api
      .post("/twoFactorAuth/verify", token, config)
      .then(() => console.log("deu bom"))
      .catch(() => console.log("nao deu bom"));
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
  min-height: 200px;

  input {
    height: 50px;
    margin: 1% 0 5% 0;
    border-radius: 30px;
    border: none;
    padding: 10px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
