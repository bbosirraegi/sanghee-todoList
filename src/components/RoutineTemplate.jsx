import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const RoutineTamplateBlock = styled.div`
  width: 300px;
  height: 768px;

  position: absolute;
  background: white;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  right: 0;
  top: 96px;
  display: flex;
  flex-direction: column;
`;
/* 슬라이딩 효과를 주고 싶은데 방법을 모르겠슴다!*/

const Close = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #00b894;
  font-size: 25px;
`;

const RoutineTemplate = ({ children, show, setShow }) => {
  return (
    show && (
      <RoutineTamplateBlock>
        <Close onClick={() => setShow(!show)}>
          <AiOutlineClose />
        </Close>
        {children}
      </RoutineTamplateBlock>
    )
  );
};

export default RoutineTemplate;
