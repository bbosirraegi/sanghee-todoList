import React, { createContext, useContext, useReducer, useRef } from "react";
/*
Context에서 여러 상태 관리
<Context 상태 관리 목록>
- todos
- onRemove
- onToggle
- onCreate
- undoneTasks

*/
const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
    love: 0,
    routine: { isRoutine: false, isThere: false },
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
    love: 0,
    routine: { isRoutine: false, isThere: false },
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
    love: 0,
    routine: { isRoutine: false, isThere: false },
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
    love: 0,
    routine: { isRoutine: false, isThere: false },
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      // state = initialState
      // action dispatch로 받은 요청
      // action.type: 요청 명 / action.todo는 dispatch된 payload
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        // 현재 todo의 id와 dispatch로 넘어온 id 값이 일치하면,
        // 현재 todo의 모든 내용을 복사하고, done 속성값을 변경시킨 state를
        // return 하고 일치하지 않으면, 현재 todo를 return
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      // 현재 todo의 id와 dispatch로 넘어온 id값이 일치하지 않는
      // todo만 걸러 새로운 state를 return함
      return state.filter((todo) => todo.id !== action.id);
    case "ADD_LIKE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, love: todo.love + 1 } : todo
      );
    case "MIN_LIKE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, love: todo.love - 1 } : todo
      );
    case "EDIT":
      console.log(action);
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.modify } : todo
      );
    case "ROUTINE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              routine: {
                isRoutine: !todo.routine.isRoutine,
                isThere: false,
              },
            }
          : todo
      );
    case "ADD_ROUTINE":
      return state.concat(action.todo);
    case "REMOVE_ROUTINE":
      return state.map((todo) =>
        todo.id === action.todo_info.id
          ? { ...todo, routine: { isRoutine: false, isThere: false } }
          : todo
      );
    default:
      throw new Error(`Unhandled Action Type: ${action.type} `);
  }
};

// state를 전달하는 Context
const TodoStateContext = createContext();
// dispatch를 전달하는 Context
const TodoDispatchContext = createContext();
// nextID를 전달하는 Context
const TodoNextIdContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  // nextID 초기화
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

function errorHandler(target) {
  const context = useContext(target);
  if (!context) {
    throw new Error("Cannot Find TodoProvider");
  }
  return context;
}

export function useTodoState() {
  return errorHandler(TodoStateContext);
}

export function useTodoDispatch() {
  return errorHandler(TodoDispatchContext);
}

export function useTodoNextId() {
  return errorHandler(TodoNextIdContext);
}

export default TodoProvider;

/*
Context에서 여러 상태 관리
<Context 상태 관리 목록>
- todos
- onRemove
- onToggle
- onCreate
- undoneTasks

*/
