import React, { useState } from "react";
import styled from "styled-components"
import {MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from "../Reuse/Button";
import {GoSearch} from "react-icons/go"
import {BsCart} from "react-icons/bs"
import img from "../../Assets/home1.webp"
import img1 from "../../Assets/home2.webp"
import img2 from "../../Assets/home3.webp"
import scroll from "react-scroll"


const Header = ()=>{

    const [hover, setHover] = useState<boolean>(false)
    const [hover1, setHover1] = useState<boolean>(false)
    const [hover2, setHover2] = useState<boolean>(false)
    const [scroll, setScroll] = useState<boolean>(false)

    const onScroll = ()=>{
        if (window.scrollY >= 70) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll)
    const onHover = ()=>{
        setHover(!hover)
    }
    const onHover1 = ()=>{
        setHover1(!hover1)
    }
    const onHover2 = ()=>{
        setHover2(!hover2)
    }

    return (
        <div>
            {
                scroll ? <Container  style={{backgroundColor: "white"}}>
                <Main>
                    <Logo>Skilify</Logo>
                    <NavsHolder>
                        <Navs onMouseEnter={onHover}>
                            <Nav>Home
                            </Nav>
                            {
                                hover ? <Icon3/> : <Icon/>
                            }
                            {
                                hover ? <DropDown>
                                    <Img src={img}/>
                                    <Img1 src={img1}/>
                                    <Img2 src={img2}/>
                                        </DropDown>: null
                            }
                        </Navs>
                        <Navs onMouseEnter={onHover1}>
                            <Nav>Pages</Nav>
                            {
                                hover1 ? <Icon3/> : <Icon/>
                            }
                            {
                                hover1 ? <SDrop>
                                    <ANav>Contact Us</ANav>
                                    <ANav>Courses</ANav>
                                    <ANav>Teacher Profile</ANav>
                                    <ANav>Become A Teacher</ANav>
                                    <ANav>Blog</ANav>
                                    <ANav>Blog Detail</ANav>
                                </SDrop> : null
                            }
                    
                        </Navs>
                        <Navs  onMouseEnter={onHover2}>
                            <Nav>Courses</Nav>
                            {
                                hover2 ? <Icon3/> : <Icon/>
                            }
                            {
                                hover2 ? <CDrop>
                                    <ANav>All Courses</ANav>
                                    <ANav>Design</ANav>
                                    <ANav>Development</ANav>
                                    <ANav>Photography</ANav>
                                </CDrop> : null
                            }
                        </Navs>
                        <Navs>
                            <Nav>Features</Nav>
                            <Icon/>
                        </Navs>
                        <Navs>
                            <Nav>Blog</Nav>
                            <Icon/>
                        </Navs>
                    </NavsHolder>
                    <LeftSide>
                        <Icon2><BsCart/></Icon2>
                        <Icon1><GoSearch/></Icon1>
                        <Button text="Register" w="150px" h="47px"/>
                    </LeftSide>
                </Main>
            </Container> : <Container>
                <Main>
                    <Logo>Skilify</Logo>
                    <NavsHolder>
                        <Navs onMouseEnter={onHover}>
                            <Nav>Home
                            </Nav>
                            {
                                hover ? <Icon3/> : <Icon/>
                            }
                            {
                                hover ? <DropDown>
                                    <Img src={img}/>
                                    <Img1 src={img1}/>
                                    <Img2 src={img2}/>
                                        </DropDown>: null
                            }
                        </Navs>
                        <Navs onMouseEnter={onHover1}>
                            <Nav>Pages</Nav>
                            {
                                hover1 ? <Icon3/> : <Icon/>
                            }
                            {
                                hover1 ? <SDrop>
                                    <ANav>Contact Us</ANav>
                                    <ANav>Courses</ANav>
                                    <ANav>Teacher Profile</ANav>
                                    <ANav>Become A Teacher</ANav>
                                    <ANav>Blog</ANav>
                                    <ANav>Blog Detail</ANav>
                                </SDrop> : null
                            }
                    
                        </Navs>
                        <Navs  onMouseEnter={onHover2}>
                            <Nav>Courses</Nav>
                            {
                                hover2 ? <Icon3/> : <Icon/>
                            }
                            {
                                hover2 ? <CDrop>
                                    <ANav>All Courses</ANav>
                                    <ANav>Design</ANav>
                                    <ANav>Development</ANav>
                                    <ANav>Photography</ANav>
                                </CDrop> : null
                            }
                        </Navs>
                        <Navs>
                            <Nav>Features</Nav>
                            <Icon/>
                        </Navs>
                        <Navs>
                            <Nav>Blog</Nav>
                            <Icon/>
                        </Navs>
                    </NavsHolder>
                    <LeftSide>
                        <Icon2><BsCart/></Icon2>
                        <Icon1><GoSearch/></Icon1>
                        <Button text="Register" w="150px" h="47px"/>
                    </LeftSide>
                </Main>
            </Container>
            }
        </div>
    )
}

export default Header;

const ANav = styled.div`
width: 100%;
height: 30px;
color: #505050;
padding-left: 10px;
cursor: pointer;
font-size: 16px;
font-weight: 500;
:hover{
    background-color: #5f5f5f;
    color: white;
    width: 95%;
}
`
const CDrop = styled.div`
width: 200px;
height: 150px;
background-color: #fff;
margin-top: 200px;
margin-left: 115px;
display: flex;
border-radius: 3px;
justify-content:center;
flex-direction: column;
align-items: center;
position: absolute;
z-index: 4;
`
const SDrop = styled.div`
width: 200px;
height: 170px;
background-color: #fff;
margin-top: 220px;
margin-left: 125px;
display: flex;
border-radius: 10px;
justify-content:center;
flex-direction: column;
align-items: center;
position: absolute;
z-index: 4;
`

const Img2 = styled.img`
margin-right: 20px;
cursor: pointer;
z-index: 3;
:hover{
    transform: translate(0px, -15px);
    border: 3 solid black;
    border-radius: 7px;
}
`;

const Img1 = styled.img`
margin-right: 20px;
cursor: pointer;
z-index: 3;
transition: all 350ms;
:hover{
    transform: translate(0px, -15px);
    border: 3 solid black;
    border-radius: 7px;
}
`;

const Img = styled.img`
margin-right: 20px;
cursor: pointer;
z-index: 3;
:hover{
    transform: translate(0px, -15px);
    border:3 solid black;
    border-radius: 7px;
}
`;

const Logo = styled.div`
font-weight: 700;
font-size: 25px;
color: black;
`

const Nav = styled.div`
color: silver;
font-weight: 600;
font-size: 20px;
margin-right: 3px;
cursor: pointer;
`
const Navs = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
`
const NavsHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Icon = styled(MdKeyboardArrowDown)`
display: flex;
align-items: center;
justify-content: center;
margin-top: 3px;
`
const Icon3 = styled(MdKeyboardArrowUp)`
display: flex;
align-items: center;
justify-content: center;
margin-top: 3px;
`
const Icon1 = styled.div`
margin-right: 10px;
font-size: 22px;
color: #1b1b1b;
`
const DropDown = styled.div`
width: 90%;
height: 300px;
background-color: #fff;
margin-top: 350px;
margin-left: 503px;
display: flex;
justify-content:center;
align-items: center;
position: absolute;
z-index: 4;
`;

const Icon2 = styled.div`
margin-right: 10px;
font-size: 22px;
color: #1b1b1b;
`
const LeftSide = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
background-color: rgb(254,240,239);
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 22;
`