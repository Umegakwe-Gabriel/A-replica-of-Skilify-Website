import React from "react";
import styled from "styled-components";
import Button from "../Reuse/Button";
import img from "../../Assets/know-about.webp"
import {FcCheckmark} from "react-icons/fc"

const OneMan = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSide>
            <BigTxt>Get more close with your courses.</BigTxt>
            <SmallTxt>
              We provide a wide range of courses for the different sectors you
              can choose from, which suits you perfectly
            </SmallTxt>
            <AnotherList>
              <Hold>
                <Icon><FcCheckmark/></Icon>
                <Words>Detail description of each course</Words>
              </Hold>
              <Hold>
                <Icon><FcCheckmark/></Icon>
                <Words>Easy to understand language</Words>
              </Hold>
              <Hold>
                <Icon><FcCheckmark/></Icon>
                <Words>Simple and easy to learn courses</Words>
              </Hold>
            </AnotherList>
            <Button text="Start Learning Now" h="43px" w="190px"/>
          </LeftSide>
          <RightSide>
            <Holder>
              <Border />
              <Image src= {img}/>
            </Holder>
          </RightSide>
        </Main>
      </Container>
    </div>
  );
};

export default OneMan;

const SmallTxt = styled.div`
font-size: 18px;
font-weight: 650;
margin-top: 20px;
color: #5f5f5f;
`;
const BigTxt = styled.div`
font-size: 37px;
font-weight: 750;
margin-top: 200px;
color: #494949;
`;
const Icon = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid blue;
color: blue;
margin-right: 10px;
`;
const Words = styled.div`
font-size: 18px;
font-weight: 650;
margin-top: 20px;
color: #5f5f5f;
margin-bottom: 20px;
`;
const Hold = styled.div`
display: flex;
align-items: center;
`;
const AnotherList = styled.div``;
const Border = styled.div`
height: 540px;
width: 450px;
border: 5px solid rgb(247, 127, 7);
margin-top: 70px;
margin-left: 100px;
border-radius: 5px 150px 5px 5px;
position: absolute;
`;
const Image = styled.img`
position: absolute;
margin-top: 97px;
width: 440px;
left: 70px;
z-index: 1;
`;
const Holder = styled.div`
margin-left: 30px;
position: relative;
`;

const LeftSide = styled.div`
width: 500px;
`;

const RightSide = styled.div``;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
