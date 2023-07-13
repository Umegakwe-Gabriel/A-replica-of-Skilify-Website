import React, {useState} from "react";
import styled from "styled-components";
import Button from "../Reuse/Button";
import SellingCard from "../Reuse/SellingCard";
import img4 from "../../Assets/profile-img2.webp";
import img5 from "../../Assets/profile-img4.webp";
import img6 from "../../Assets/profile-img5.webp";
import img from "../../Assets/crd-img.webp";
import img1 from "../../Assets/crd-img2.webp";
import img2 from "../../Assets/crd-img3.webp";
import img7 from "../../Assets/crd-img5.webp"
import img3 from "../../Assets/dots-pattern-gray-vertical.svg"
import {AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Selling = () => {

  const [toggle, setToggle] = useState<boolean>(false)

    const onToggle = ()=>{
      setToggle(!toggle)
    }

  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Header>Get choice of your course</Header>
            <Button w="120px" h="50px" text="View All" />
          </Div>
          {
            toggle ? <CardHold>
            <SellingCard
              icontxt="4.2"
              icontxt1="45,00"
              icontxt2="12"
              Image={img4}
              MImage={img2}
              imgtxt="Anna Sthesia"
              price1="$250.00"
              price2="$220.00"
              words="Software Development from A to Z Beginner"
            />
            <SellingCard 
            icontxt="4.5"
            icontxt1="49,00"
            icontxt2="9"
            Image={img5}
            MImage={img1}
            imgtxt="Paul Molive"
            price1="$100.00"
            price2="$50.00"
            words="Graphic Design Master class for Beginning"/>
            <SellingCard 
            icontxt="4.7"
            icontxt1="70,00"
            icontxt2="15"
            Image={img6}
            MImage={img7}
            imgtxt="Nicole Brown"
            price1="$150.00"
            price2="$99.00"
            words="Learn HTML5 Programming Beginning"/>
          </CardHold> : 
          <CardHold>
            <SellingCard
              icontxt="4.5"
              icontxt1="49,00"
              icontxt2="9"
              Image={img4}
              MImage={img}
              imgtxt="Petey Crusier"
              price1="$200.00"
              price2="$150.00"
              words="Learn Python Programming Beginner"
            />
            <SellingCard 
            icontxt="4.3"
            icontxt1="23,00"
            icontxt2="7"
            Image={img5}
            MImage={img1}
            imgtxt="Nicole Brown"
            price1="$150.00"
            price2="$99.00"
            words="Statistics Data Science and Business Analysis"/>
            <SellingCard 
            icontxt="4.7"
            icontxt1="70,00"
            icontxt2="15"
            Image={img6}
            MImage={img2}
            imgtxt="Nicole Brown"
            price1="$150.00"
            price2="$99.00"
            words="Learn HTML5 Programming Beginning"/>
          </CardHold>
          }
         <Image>
            <img src={img3} alt="" />
          </Image> 
          <Holder>
          <div style={{display: "flex", marginTop: "230px",  alignItems: "center", marginRight: "10px"}}>
          <Icon onClick={onToggle}><AiOutlineArrowLeft/></Icon>
            {
              toggle ? <Line1 bl1="white"/> : <Line1 bl1="rgb(246,140,32)"/>
            }
          </div>
            <div style={{display: "flex", marginTop: "230px",  alignItems: "center"}}>
            {
              toggle ? <Line2 bl2="rgb(246,140,32)"/> : <Line2 bl2="white"/>
            }
            <Icon2 onClick={onToggle}><AiOutlineArrowRight/></Icon2>
            </div>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Selling;

const Icon2 = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;

:hover{
  color: rgb(246,140,32);
  cursor: pointer;
}
`;

const Line2 = styled.div<{bl2: string}>`
width: 520px;
height: 4px;
background-color: ${({bl2})=> bl2};
margin-right: 10px;
`;

const Line1 = styled.div<{bl1: string}>`
width: 520px;
height: 4px;
background-color: ${({bl1})=> bl1};
margin-left: 10px;
`;

const Icon = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;

:hover{
  color: rgb(246,140,32);
  cursor: pointer;
}
`;

const Holder = styled.div`
position: absolute;
/* width: 100%; */
display: flex;
justify-content: space-between;
`;

const Image = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
transform: rotate(90deg);
top: 360px;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #302d2d;
`;

const CardHold = styled.div`
  display: flex;
  position: absolute;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(239, 239, 246);
`;
