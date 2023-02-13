import React, { useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../TodoProvider";
import TodoEdit from "./TodoEdit";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #2d3436;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 5px;
  cursor: pointer;
`;

const Routine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 5px;
  cursor: pointer;
`;

const TodoItem = ({ id, done, text, isRoutine }) => {
  const dispatch = useTodoDispatch();
  const [like, setLike] = useState(false);
  const [edit, setEdit] = useState(false);

  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  const onLike = () => {
    setLike(!like);
    like
      ? dispatch({ type: "MIN_LIKE", id })
      : dispatch({ type: "ADD_LIKE", id });
    /* lIKE의 초기값이 FALSE이기 때문에...? 음.. why.. */
  };

  const onEdit = () => setEdit(!edit);
  const onRoutine = () => dispatch({ type: "ROUTINE", id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done} onClick={onEdit}>
        {text}
      </Text>
      {/* text로 props를 전달해, 스타일을 적용시켜주기 위함. */}
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
      <Like style={{ color: like ? "#ff6b6b" : "#dee2e6" }} onClick={onLike}>
        <FiHeart />
      </Like>
      <Routine onClick={onRoutine}>
        {!isRoutine && <AiOutlineStar style={{ color: "#dee2e6" }} />}
        {isRoutine && <AiFillStar style={{ color: "#f9ca24" }} />}
      </Routine>
      <TodoEdit id={id} edit={edit} setEdit={setEdit} />
    </TodoItemBlock>
  );
};

// 불필요한 리렌더링 방지
export default React.memo(TodoItem);
