import React from "react";
import styled from "styled-components";
import Button from "../Reuse/Button";
import img from "../../Assets/circle (1).svg";
import img1 from "../../Assets/circle1.png";
import img2 from "../../Assets/circle2.png";
import img3 from "../../Assets/circle3.png";
import img4 from "../../Assets/dots-pattern-pink.svg";
import img5 from "../../Assets/circle5.png";
import img6 from "../../Assets/circle6.png";
import img7 from "../../Assets/circle7.png";
import img8 from "../../Assets/dots-pattern-gray-vertical.svg";

const AfterSelling = () => {
  return (
    <div>
      <Container>
        <Main>
          <FirstPart>
            <Img0 src={img} />
            <Img src={img1} />
            <Img1 src={img2} />
            <Img2 src={img3}/>
          </FirstPart>
            <Img3 src={img4}/>
          <SecondPart>
            <BigTxt>Select the best from various online sources</BigTxt>
            <SmallTxt>
              Our online video courses give you the freedom to learn remotely,
              and our experts will guide you properly.{" "}
            </SmallTxt>
            <ButtonHolder>
            <Button w="150px" h="55px" text="Join Today" />
            </ButtonHolder>
          </SecondPart>
          <ThirdPart>
            <Img4 src={img5}/>
            <Img5 src={img6}/>
            <Img6 src={img7}/>
            <Img7 src={img}/>
            <Img8 src= {img8}/>
          </ThirdPart>
        </Main>
      </Container>
    </div>
  );
};

export default AfterSelling;

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
`;
const Img8 = styled.img``;
const Img7 = styled.img``;
const Img6 = styled.img``;
const Img5 = styled.img``;
const Img4 = styled.img`

`;
const Img3 = styled.img`
width: 100px;
`;
const Img2 = styled.img`
margin-top: 100px;
`;
const Img1 = styled.img`
margin-right: 10px;
`;
const Img0 = styled.img`
margin-top: 100px;
`;
const Img = styled.img``;
const SmallTxt = styled.div`
font-weight: 500;
font-size: 18px;
color: #302d2d;
text-align: center;
width: 700px;
margin-top: 27px;
margin-bottom: 27px;
`;
const BigTxt = styled.div`
font-weight: 700;
font-size: 35px;
color: #302d2d;
text-align: center;
`;
const ThirdPart = styled.div`
width: 200px;
`;
const SecondPart = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;
const FirstPart = styled.div`
  width: 200px;
`;
const Main = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
`;
const Container = styled.div`
  background-color: rgb(254,240,239);
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
