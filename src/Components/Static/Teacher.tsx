import React from "react";
import styled from "styled-components"
import Button from "../Reuse/Button";
import img from "../../Assets/apply-crd-img.webp"

const Teacher = ()=>{
    return (
        <div>
            <Container>
                <Hold>
                <Image/>
                <MainHold>
                <Main>
                <Img src={img}/>
                <Holder>
                    <BigTxt>Become A Teacher</BigTxt>
                    <SmallTxt>Teach what you love. Coursector gives you the tools to create a course</SmallTxt>
                    <Button text="Apply as A Teacher" h="50px" w="180px"/>
                </Holder>
                </Main>
                <Main>
                <Img src={img}/>
                <Holder>
                    <BigTxt>Coursector for business</BigTxt>
                    <SmallTxt>Get unlimited access to 3,000+ of Coursector's top courses for your team </SmallTxt>
                    <Button text="Get Skilify For Business" h="50px" w="200px"/>
                </Holder>
                </Main>
                </MainHold>
                <Image2/>
                </Hold>
            </Container>
        </div>
    )
}

export default Teacher;

const Hold = styled.div`
width: 90%;
height: 100%;
`
const MainHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const Image2 = styled.div`
position: relative;
`
const Main = styled.div`
/* position: absolute; */
width: 550px;
height: 220px;
background-color: white;
margin-top: 50px;
display: flex;
`
const Holder = styled.div`
margin-right: 20px;
margin-top: 40px;
`
const SmallTxt = styled.div`
font-weight: 650px;
font-size: 17px;
color: gray;
margin-bottom: 10px;
`
const BigTxt = styled.div`
font-weight: bold;
font-size: 20px;
color: gray;
margin-bottom: 10px;
`
const Img = styled.img`
width: 60px;
height: 60px;
margin-left: 20px;
margin-right: 15px;
margin-top: 40px;
`
const Image = styled.div`
position: relative;
`
const Container = styled.div`
height: 370px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(254,240,239);
`