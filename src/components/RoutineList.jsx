import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoProvider";
import RoutineItem from "./RoutineItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const RoutineList = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) =>
        todo.routine.isRoutine ? (
          !todo.routine.isThere ? (
            <RoutineItem todo={todo} />
          ) : null
        ) : todo.routine.isThere ? null : null
      )}
    </TodoListBlock>
  );
};

export default RoutineList;
