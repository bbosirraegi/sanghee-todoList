import React from "react";
import styled from "styled-components";

const RoutineHeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e9ecef;

  h2 {
    font-size: 20x;
  }

  p {
    color: #868e96;
  }
`;

const RoutineHead = () => {
  return (
    <RoutineHeadBlock>
      <h2>즐겨찾기⭐</h2>
      <p>
        <span style={{ color: "#00b894" }}>Tip!</span> 루틴으로 이용해 보세요!
      </p>
    </RoutineHeadBlock>
  );
};

export default RoutineHead;
