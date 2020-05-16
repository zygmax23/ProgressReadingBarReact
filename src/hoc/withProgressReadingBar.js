import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const StyledProgressReadingBar = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 50px;
  background: red;
  position: sticky;
  top: 0;
  z-index: 10;
  transform-origin: left center;
  transform: scaleX(0);
  transition: 0.1s;
`;

const withProgressReadingBar = (Component) => (props) => {
  const progressReadingBarRef = useRef(null);
  const progressReadingBarParentRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      //prettier-ignore
      let distanceToTopParent =  progressReadingBarRef.current.parentNode.getBoundingClientRect().bottom;
      //prettier-ignore
      let progressBarParentHeight = progressReadingBarRef.current.parentNode.offsetHeight;

      //prettier - ignore;
      if (distanceToTopParent > progressBarParentHeight)
        progressReadingBarRef.current.style.transform = `scaleX(0)`;

      //prettier-ignore
      if ( distanceToTopParent < progressBarParentHeight && distanceToTopParent-5 > 0){
          progressReadingBarRef.current.style.transform = `scaleX(${
            Math.abs(distanceToTopParent-progressBarParentHeight-5) / progressBarParentHeight
          })`;
        }

      if (distanceToTopParent <= 5) {
        progressReadingBarRef.current.style.transform = `scaleX(1)`;
      }
    });
  });

  return (
    //prettier-ignore
    <Component {...props} ProgressReadingBar={()=><StyledProgressReadingBar ref={progressReadingBarRef}/>} progressReadingBarParentRef={progressReadingBarParentRef} >
      {props.children}
    </Component>
  );
};

export default withProgressReadingBar;
