import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import RoutineTemplate from "./RoutineTemplate";
import RoutineHead from "./RoutineHead";
import RoutineList from "./RoutineList";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const Routine = styled.div`
  position: absolute;
  color: #f9ca24;
  font-size: 30px;
  left: 28rem;
  top: 2rem;
`;

const TodoTemplate = ({ children }) => {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  return (
    <>
      <TodoTemplateBlock>
        <Routine onClick={onClick}>
          <AiFillStar />
        </Routine>
        {children}
      </TodoTemplateBlock>
      {show && (
        <RoutineTemplate show={show} setShow={setShow}>
          <RoutineHead />
          <RoutineList />
        </RoutineTemplate>
      )}
    </>
  );
};

export default TodoTemplate;
