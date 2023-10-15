import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <Modal>
      <Container>
        <Spinner />
      </Container>
    </Modal>
  );
};

export default Loading;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Modal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: transparent;
  z-index: 99990999;
`;

const Spinner = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 120px;
  border-radius: 50%;
  border: 5px solid pink;
  border-top-color: transparent;
  animation: spin 0.8s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
