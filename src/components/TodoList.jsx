import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoProvider";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          isRoutine={todo.routine.isRoutine}
          love={todo.love}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
