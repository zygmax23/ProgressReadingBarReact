import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import withProgressReadingBar from "../hoc/withProgressReadingBar";

const StyledComponent = styled.div`
  min-height: 30vh;
  max-height: 50vh;
  width: 80%;
  background: #d4d4d4;
  margin: 10px auto;
`;

const StyledContent = styled.div`
  width: 100%;
  height: calc(100% - 5px);
  padding: 30px;
`;

const StyledKey = styled.h2`
  color: red;
`;

//prettier-ignore
const MainComponent = ({ children, ProgressReadingBar, progressReadingBarParentRef, id }) => {
  
  const handleClick = () => {
    console.log("click");
  };

  return (
    <StyledComponent ref={progressReadingBarParentRef}>
      <ProgressReadingBar />
      <StyledContent>
        {children}
        <button onClick={handleClick}>click me</button>
        <StyledKey>
            {id}
        </StyledKey>
      </StyledContent>
    </StyledComponent>
  );
};

export default withProgressReadingBar(MainComponent);
