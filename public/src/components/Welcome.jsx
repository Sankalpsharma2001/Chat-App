import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/Geu2.gif";
import Logout from "./Logout";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);

  return (
    <Container>
      <LogoutWrapper>
        <Logout />
      </LogoutWrapper>
     
      <img src={Robot} alt="" />
      <br></br>
      <br></br>
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  position: relative; /* Added position relative to the container */
  img {
    height: 15rem;
  }
  span {
    color: #36d0eb;
  }
`;

const LogoutWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;