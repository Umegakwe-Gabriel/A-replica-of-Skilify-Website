import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import img from "../../Assets/girl-img-study.webp";
import img1 from "../../Assets/dots-pattern-pink.svg";
import img2 from "../../Assets/dots-pattern-pink.svg";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSide>
            <BigTxt>
              Learn more and make success the result of perfection.
            </BigTxt>
            <SmallTxt>
              Pick from over 100,000 online video courses with new additions
              published every month.
            </SmallTxt>
            <InputHolder>
              <Input placeholder="Search your favorite course" />
              <Icon>
                <GoSearch />
              </Icon>
            </InputHolder>
          </LeftSide>
          <Image1
            src={img2}
            style={{ marginTop: "550px", marginLeft: "-525px", }}
          />
          <RightSide>
            <Hold>
              <Div />
              <Img src={img} />
              <Image src={img1} />
            </Hold>
          </RightSide>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Hold = styled.div`
  margin-left: 525px;
  display: flex;
  margin-top: 70px;
`;

const Image1 = styled.img`
  /* margin-right: 10px */
`;

const Image = styled.img`
  position: absolute;
  margin-left: 500px;
  margin-top: 100px;
`;
const Img = styled.img`
  position: absolute;
  width: 450px;
  margin-right: 50px;
  margin-top: 10px;
`;
const Div = styled.div`
  width: 400px;
  height: 550px;
  border: 3px solid rgb(246, 141, 36);
  border-radius: 25px;
  margin-left: 140px;
  margin-top: 70px;
`;
const SmallTxt = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600px;
  width: 500px;
`;

const BigTxt = styled.div`
  font-weight: 800;
  margin-top: 240px;
  font-size: 45px;
  width: 500px;
  line-height: 1.23;
`;

const Input = styled.input`
  height: 100%;
  width: 80%;
  outline: none;
  border: none;
  font-size: 15px;
  font-weight: 700px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  background-color: rgb(245, 105, 98);
  width: 20%;
  height: 100%;
`;

const InputHolder = styled.div`
  height: 50px;
  background-color: white;
  width: 480px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  z-index: 3;
`;
const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  height: 115vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 240, 239);
`;
