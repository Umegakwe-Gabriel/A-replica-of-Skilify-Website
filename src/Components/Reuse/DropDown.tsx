import React from "react";
import styled from "styled-components";

interface iDrop {
  w?: string;
  h?: string;
}

const DropDown: React.FC<iDrop> = ({ w, h }) => {
  return (
    <div>
      <Container w={`${w}`} h={`${h}`}></Container>
    </div>
  );
};

export default DropDown;

const Container = styled.div<{ w: string; h: string }>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-color: #fff;
  margin-top: 350px;
  margin-left: 503px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 4;
`;
