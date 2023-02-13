import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoProvider";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #2d3436;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }

  .love-count {
    color: #ff7675;
    font-size: 20px;
    margin-top: 40px;
    font-weight: bold;
  }

  .numbers {
    display: flex;
    justify-content: space-between;
  }
`;

const TodoHead = () => {
  // state로 넘겨준 initialState를 context에서 가져와 todos에 담아줌.
  const todos = useTodoState();
  console.log("todos:", todos);
  //done 값이 false인 항목들의 개수를 화면에 보여준다.
  // done = false인 todo들만 걸러 undoneTasks에 배열 형태로 저장한다.
  // => undoneTasks 배열 길이 = 남은 할 일의 개수!
  const undoneTasks = todos.filter((todo) => !todo.done);
  console.log("undoneTasks:", undoneTasks);

  const loveCount = todos.filter((todo) => todo.love > 0);

  // 날짜, 요일 표시하기
  const today = new Date();
  const day = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{day}</h1>
      <div className="day">{dayName}</div>
      <div className="numbers">
        <span className="tasks-left">할 일 {undoneTasks.length}개 남음</span>
        <span className="love-count"> ❤ {loveCount.length}</span>
      </div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
