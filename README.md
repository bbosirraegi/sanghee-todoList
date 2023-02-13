# sanghee-todoList

## 1. 컴포넌트 만들기
### TodoTemplate
- children을 prop으로 받음.

### TodoList
- done으 props로 전달함.

### TodoItem
- TodoList로 부터 props로 done, text 값을 받아옴.

### TodoCreate
- props로 open 전달
  - css에 props으로 open 넘겨줌. 
  - open 값에 따라 CircleButton의 css style값을 변경시킴.

## 2. ContextAPI 적용하기
State 관리 방법

① App에서 상태 관리
- App 컴포넌트가 onToggle, todo, onRemove 등 갖고 있다가 props로 전달하는 방식
- 하지만, 프로젝트 규모가 큰 경우 app에서 모든 상태를 관리하고 props로 전달하면, props를 전달하기 위해 거쳐야 하는 컴포넌트의 수가 늘어남.  

② Context API 사용
- 'Context' 라는 한 곳에 상태들을 모아두고 관리해, 필요한 컴포넌트에 바로 전달(dispatch)한다.

### Reducer 만들기
- reducer => action으로 전달된 action의 type에 따라 수행할 동작을 정의한다.

### Context 만들기
- state, dispatch를 다른 컴포넌트에서 바로 사용할 수 있게 해줌.
- 이 프로젝트에선 각각에 대한 Context를 만들어 사용한다.

### Context에서 사용할 값을 지정할 때
- Provider 컴포넌트를 렌더링하고 value로 전달할 값을 설정한다.
  - props로 받아온 children 값을 내부에 렌더링해준다.

-> 다른 컴포넌트에서 state/dispatch를 사용하고 싶을 때, 사용 가능하다.

### nextId값 관리하기
- 각 항목의 고유 ID -> id값이나 Date.now(), uuid 값을 사용하기도 한다.

## 3.기능 구현하기
### TodoHead
- TodoStateContext로 Context에서 state(InitialTodos)를 가져온다.
- 가져온 state를 todos 배열에 저장한다.

### TodoList
- Context에서 state를 가져와 todos 배열에 저장한다.
- todos 배열의 각 원소들을 map으로 itterate하여, todo의 id,text,done state 값을 props로 전달한다.

### TodoItem
- List에서 props(id, text, done)로 정보를 받아온다.
- dispatchContext에서 dispatch가져와 변수 dispatch에 저장
- dispatch로 Context에 action 요청

-> action : type, payload(action에 필요한 data) 
- dispatch function으로 TOGGLE, REMOVE action을 요청한다.

### TodoCreate
- context에서 nextId를 가져온다.
- context에서 dispatch를 가져온다.
-> form이 onSubmit 호출 시, dispatch로 'CREATE' action을 요청한다.

