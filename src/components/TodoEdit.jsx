import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../TodoProvider";

const TodoEditBlock = styled.div`
  width: 100%;
`;

const EditForm = styled.form`
  background: #dee2e6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  margin-top: 15px;

  padding-left: 32px;
  padding-top: 20px;
  padding-right: 32px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoEdit = ({ id, edit, setEdit }) => {
  const dispatch = useTodoDispatch();
  const [modify, setModify] = useState("");
  const onChange = (e) => setModify(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id, modify });
    setModify("");
    setEdit(!edit);
  };
  return (
    edit && (
      <TodoEditBlock>
        <EditForm onSubmit={onSubmit}>
          <Input
            type="text"
            autoFocus
            value={modify}
            onChange={onChange}
            placeholder="수정할 값을 입력하고, Enter를 누르세요"
          />
        </EditForm>
      </TodoEditBlock>
    )
  );
};

export default TodoEdit;
