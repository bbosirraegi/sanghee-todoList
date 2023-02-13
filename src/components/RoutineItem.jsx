import React from "react";
import styled from "styled-components";
import { MdDelete, MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoProvider";

const RoutineItemBlock = styled.div`
  display: flex;
  align-items: center;
  jutify-content: center;

  border-bottom: 1px solid #e9ecef;

  padding: 15px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #00b894;
  font-size: 18px;
  cursor: pointer;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #00b894;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 15px;
  color: #2d3436;
  padding-left: 20px;
`;

const RoutineItem = ({ todo }) => {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onClick = () => {
    dispatch({
      type: "ADD_ROUTINE",
      todo: {
        id: nextId.current,
        text: todo.text,
        done: false,
        routine: { isRoutine: true, isThere: true },
        love: 0,
      },
    });

    nextId.current++;
  };

  const onRemove = () => {
    dispatch({ type: "REMOVE_ROUTINE", todo_info: { id: todo.id } });
  };

  return (
    <RoutineItemBlock>
      <Add onClick={onClick}>
        <MdAdd />
      </Add>
      <Text>{todo.text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </RoutineItemBlock>
  );
};

export default RoutineItem;
