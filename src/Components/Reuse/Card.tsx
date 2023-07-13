import React from "react";
import styled from "styled-components";


interface iCard {
    image?: any;
    bt?: string;
    st?: string;
    bgc?: string;
    bgd?: string;
    bgb?: string;
    bgs?: string;
    dd?: string;
    bcc?: string;
}

const Card: React.FC<iCard> = ({image, bt, st, bgc, bgd, bgb, bgs, dd, bcc}) => {
  return (
    <div>
      <Container bgc={`${bgc}`} bgd={`${bgd}`} bgb={`${bgb}`} bgs={`${bgs}`} bcc= {`${bcc}`}>
        <Main>
        <Div dd={`${dd}`}>
          <Img src={image}/>
        </Div>
        <BigTxt>{bt}</BigTxt>
        <SmallTxt>
          {st}
        </SmallTxt>
        </Main>
      </Container>
    </div>
  );
};

export default Card;

const SmallTxt = styled.div`
font-size: 17px;
font-weight: 500;
margin-top: 15px;
margin-left: 20px;
color: #424242;

`;

const BigTxt = styled.div`
font-size: 20px;
font-weight: 700;
margin-top: 15px;
margin-left: 20px;
`;

const Img = styled.img``;

const Div = styled.div<{dd: string}>`
width: 50px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({dd})=> dd};
border-radius: 7px;
margin-left: 20px;

`;

const Main = styled.div`
    width: 100%;
    height: 85%;
    margin-top: 20px;
`

const Container = styled.div<{bgc: string, bgd: string, bgb: string, bgs: string, bcc: string}>`
width: 263px;
height: 300px;
border-radius: 7px;
background-color: ${({bcc})=>bcc};
display: flex;
align-items: center;
margin-right: 30.18px;
margin-bottom: 30px;
transition: all 350ms;
:hover{
    background-color: ${({bgc})=> bgc};
    cursor: pointer;
    transform: translate(0px, -15px)
}

:hover ${Div} {
background-color: ${({bgd})=> bgd};
}
:hover ${BigTxt} {
    color: ${({bgb})=> bgb};
}
:hover ${SmallTxt} {
    color: ${({bgs})=> bgs};
}
`;
