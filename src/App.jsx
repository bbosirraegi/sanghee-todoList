import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import RoutineTemplate from "./components/RoutineTemplate";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoProvider from "./TodoProvider";

const GlobalStyle = createGlobalStyle`
body{
    background:#e9ecef;
}
`;
const App = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

export default App;

/*
관리가 필요한 상태들
- todos
- onToggle
- onRemove
- onCreate
- nextId

이 상태를 App에서 props로 전달하는 것이 아닌
한 곳(Context)에 모아서 전달하도록 함! => ContextAPI 사용하기

*/
