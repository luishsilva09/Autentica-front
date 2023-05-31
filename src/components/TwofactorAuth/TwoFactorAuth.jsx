import { useState } from "react";
import api from "../../services/Api";
import QRCode from "qrcode";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function TwoFactorAuth() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  async function validTwoFactorAuth(event) {
    event.preventDefault();
    await api
      .post("/twoFactorAuth/verify", { token }, config)
      .then(() => {
        console.log("validado com sucesso");
      })
      .catch(() => console.log("nao foi possivel validar"));
  }

  useEffect(() => {
    api
      .post("/twoFactorAuth", {}, config)
      .then((e) => {
        QRCode.toDataURL(e.data.otpauth_url, function (err, dataUrl) {
          setUrl(dataUrl);
        });
      })
      .catch((err) => {
        if (err.response.status === 401) navigate("/end");
      });
  }, []);
  return (
    <Container>
      <Box>
        <img src={url} alt="" />
        <form onSubmit={(event) => validTwoFactorAuth(event)}>
          <input
            type="number"
            value={token}
            placeholder="PIN"
            onChange={(e) => setToken(e.target.value)}
          ></input>
          <button type="submit">Ativar</button>
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
  height: 65%;
  width: 450px;
  border-radius: 50px;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 400px;

  img {
    height: 200px;
    width: 200px;
    margin: 10px;
  }
  input {
    height: 50px;
    margin: 1% 0 10% 0;
    border-radius: 30px;
    border: none;
    padding: 10px;
  }
  button {
    height: 70px;
    width: 100%;
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

  @media (max-width: 600px) {
    width: 100vw;
    height: 50%;
    padding: 4%;
  }
  @media (max-height: 600px) {
    height: 100vh;
  }
`;
