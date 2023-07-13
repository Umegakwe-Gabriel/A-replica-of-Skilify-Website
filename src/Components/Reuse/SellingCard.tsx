import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../../Assets/star.svg";
import img2 from "../../Assets/crd-view (1).svg";
import img3 from "../../Assets/crd-play (1).svg";
import { MdFavorite } from "react-icons/md";

interface iSC {
  icontxt?: string;
  icontxt1?: string;
  icontxt2?: string;
  Image?: any;
  MImage?: any;
  imgtxt?: string;
  price1?: string;
  price2?: string;
  words?: string;
}

const SellingCard: React.FC<iSC> = ({
  icontxt,
  icontxt1,
  icontxt2,
  Image,
  MImage,
  imgtxt,
  price1,
  price2,
  words,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Container>
        <Main>
          <MPic>
            <Img src={MImage} />
            <div onClick={onToggle}>
              {toggle ? (
                <Iconmg>
                  <MdFavorite style={{ color: "red" }} />
                </Iconmg>
              ) : (
                <Iconmg>
                  <MdFavorite />
                </Iconmg>
              )}
            </div>
          </MPic>
          <Data>
            <Result>
              <Img1 src={img1} />
              <Text>{icontxt}</Text>
            </Result>
            <Result>
              <Img1 src={img2} />
              <Text>{icontxt1}</Text>
            </Result>
            <Result>
              <Img1 src={img3} />
              <Text>{icontxt2}</Text>
            </Result>
          </Data>
          <Words>{words}</Words>
          <Hold>
            <Div>
              <Img2 src={Image} />
              <Write>{imgtxt}</Write>
            </Div>
            <Div2>
              <Line />
              <Price1>{price1}</Price1>
              <Price2>{price2}</Price2>
            </Div2>
          </Hold>
        </Main>
      </Container>
    </div>
  );
};

export default SellingCard;

const Data = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid silver;
`;

const Price2 = styled.div`
  color: rgb(246, 140, 32);
  font-size: 18px;
  font-weight: 750;
`;
const Line = styled.div`
  height: 1px;
  width: 68px;
  background-color: #444444;
  position: absolute;
  margin-top: 12px;
`;

const Price1 = styled.div`
  font-size: 18px;
  font-weight: 750;
  color: rgb(151, 152, 160);
  position: relative;
  margin-right: 7px;
`;
const Img2 = styled.img`
  border-radius: 5px;
`;

const Div2 = styled.div`
  display: flex;
  margin-top: 7px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Write = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #444444;
  margin-left: 2px;
`;
const Words = styled.div`
  font-size: 25px;
  font-weight: 750;
  color: #2c2c2c;
  margin-top: 10px;
`;

const Img1 = styled.img``;
const Text = styled.div`
  color: gray;
  font-size: 18px;
  margin-left: 4px;
`;
const Result = styled.div`
  display: flex;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 190px;
  object-fit: cover;
`;

const Iconmg = styled.div`
  position: absolute;
  margin-left: 310px;
  margin-top: -170px;
  cursor: pointer;
  color: white;
  font-size: 30px;
`;

const MPic = styled.div``;

const Main = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 7px;
`;

const Container = styled.div`
  width: 370px;
  height: 400px;
  margin-top: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 30px;
  transition: all 350ms;
  :hover{
    cursor: pointer;
    transform: translate(0px, -5px);
  }
`;
