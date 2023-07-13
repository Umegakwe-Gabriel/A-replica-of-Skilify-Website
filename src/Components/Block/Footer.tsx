import React from "react";
import styled from "styled-components"

const Footer = ()=>{
    return (
        <div>
            <Container>
                <Main>
                    <Hold>
                    <Holder>
                        <MainTxt>Home Pages</MainTxt>
                        <Links>Home v1</Links>
                        <Links>Home v2</Links>
                        <Links>Home v3</Links>
                    </Holder>
                    <Holder>
                        <MainTxt>Courses</MainTxt>
                        <Links>All Courses</Links>
                        <Links>Design </Links>
                        <Links>Development</Links>
                        <Links>Marketing</Links>
                        <Links>Photography</Links>
                    </Holder>
                    <Holder>
                        <MainTxt>Pages</MainTxt>
                        <Links>Blog</Links>
                        <Links>Blog Details</Links>
                        <Links>Contact us</Links>
                        <Links>Courses</Links>
                        <Links>Teacher Profile</Links>
                        <Links>404 page</Links>
                    </Holder>
                    <Holder>
                        <MainTxt>Features</MainTxt>
                        <Links>Course Details v1</Links>
                        <Links>Course Detail v2</Links>
                    </Holder>
                    </Hold>
                    <Line/>
                    <Held>
                        <FirstWrite>2021 Skilify Education Private Limited. Alll rights reserved</FirstWrite>
                        <Icons>
                            <Div>f</Div>
                            <Div>G</Div>
                            <Div>in</Div>
                        </Icons>
                    </Held>
                </Main>
            </Container>
        </div>
    )
}

export default Footer;

const FirstWrite = styled.div`
font-size: 14px;
font-weight: 500;
color: #868686;
`
const Icons = styled.div`
    display: flex;
`
const Div = styled.div`
    margin-right: 7px;
    font-size: 20px;
    font-weight: bold;
    color: #868686;
`

const MainTxt = styled.div`
font-size: 21px;
font-weight: bold;
color: #fff;
margin-top: 50px;
margin-bottom: 20px;
`
const Links = styled.div`
font-size: 18px;
font-weight: 500;
color: #868686;
`
const Held = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
`
const Hold = styled.div`
width: 100%;
display: flex;
margin-bottom: 20px;
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: #868686;
`
const Holder = styled.div`
margin-right: 160px;
`
const Main = styled.div`
width: 90%;
height: 100%;
`
const Container = styled.div`
height: 360px;
width: 100%;
background-color: #303030;
display: flex;
justify-content: center;
align-items: center;
`