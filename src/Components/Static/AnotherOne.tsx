import React, {useState} from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img from "../../Assets/user1.webp"
import img2 from "../../Assets/user.webp"
import img3 from "../../Assets/star.svg"


const AnotherOne = () => {

const [click, setClick] = useState<boolean>(false)
const onEnter = ()=>{
    setClick(!click)
}

  return (
    <div>
      <Container>
        <Main>
          <Holder>
          <BigTxt>What our student say</BigTxt>
          <Hold>
            <Icon>
              <AiOutlineArrowLeft onClick={onEnter}/>
            </Icon>
            <Icon1>
              <AiOutlineArrowRight onClick={onEnter}/>
            </Icon1>
          </Hold>
          </Holder>
        {
            click ?  <BoxHold>
            <Div>
               <Top>
                 <TDiv>
                   <MImg src= {img}/>
                   <Txt>
                     <BigTxt2>William Taylor</BigTxt2>
                     <SmallTxt>Student</SmallTxt>
                   </Txt>
                 </TDiv>
                 <ImgHold>
                   <Img src={img3}/>
                   <Img src={img3}/>
                   <Img src={img3}/>
                   <Img src={img3}/>
                   <Img src={img3}/>
                 </ImgHold>
               </Top>
               <Bottom>
                 <Words>
                   Skilify is the best platform to learn new technologies and
                   courses. I have learned a lot from this platform
                 </Words>
               </Bottom>
             </Div>
             <Div>
               <Top>
                 <TDiv>
                   <MImg src= {img2}/>
                   <Txt>
                     <BigTxt2>Oliver Smith</BigTxt2>
                     <SmallTxt>Student</SmallTxt>
                   </Txt>
                 </TDiv>
                 <ImgHold>
                   <Img src={img3}/>
                   <Img src={img3}/>
                   <Img src={img3}/>
                   <Img src={img3}/>
                   <Img src={img3}/>
                 </ImgHold>
               </Top>
               <Bottom>
                 <Words>
                   Skilify is the best platform to learn new technologies and
                   courses. I have learned a lot from this platform
                 </Words>
               </Bottom>
             </Div>
            </BoxHold> :  <BoxHold>
         <Div>
            <Top>
              <TDiv>
                <MImg src= {img}/>
                <Txt>
                  <BigTxt2>William Daniel</BigTxt2>
                  <SmallTxt>Student</SmallTxt>
                </Txt>
              </TDiv>
              <ImgHold>
                <Img src={img3}/>
                <Img src={img3}/>
                <Img src={img3}/>
                <Img src={img3}/>
                <Img src={img3}/>
              </ImgHold>
            </Top>
            <Bottom>
              <Words>
                Skilify is the best platform to learn new technologies and
                courses. I have learned a lot from this platform
              </Words>
            </Bottom>
          </Div>
          <Div>
            <Top>
              <TDiv>
                <MImg src= {img2}/>
                <Txt>
                  <BigTxt2>Maiden Anna</BigTxt2>
                  <SmallTxt>Student</SmallTxt>
                </Txt>
              </TDiv>
              <ImgHold>
                <Img src={img3}/>
                <Img src={img3}/>
                <Img src={img3}/>
                <Img src={img3}/>
                <Img src={img3}/>
              </ImgHold>
            </Top>
            <Bottom>
              <Words>
                Skilify is the best platform to learn new technologies and
                courses. I have learned a lot from this platform
              </Words>
            </Bottom>
          </Div>
         </BoxHold>
        }
        </Main>
      </Container>
    </div>
  );
};

export default AnotherOne;

const BoxHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const BigTxt2 = styled.div`
color: gray;
font-weight: 800;
font-size: 20px;
margin-top: 7px;
`;
const SmallTxt = styled.div`
color: gray;
font-weight: 650;
font-size: 17px;
margin-top: 7px;
`;
const Holder = styled.div`
display: flex;
justify-content: space-between;
`;

const MImg = styled.img`
margin-right: 8px;
`;
const Txt = styled.div`

`;
const TDiv = styled.div`
display: flex;
`;
const Img = styled.img`
margin-right: 3px;
`;
const ImgHold = styled.div`
display: flex;
margin-right: 20px;
`;
const Top = styled.div`
display: flex;
justify-content: space-between;
/* margin-top: 55px; */
margin-left: 20px;
`;
const Words = styled.div`
color: gray;
font-weight: 600;
font-size: 17px;
`;
const Bottom = styled.div`
margin-top:10px;
margin-left:20px;
margin-right:20px;
`;
const Div = styled.div`
height: 170px;
width: 550px;
background-color: white;
margin-top: 40px;
border-radius: 2px 30px 2px 2px ;

`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-right: 15px;

  :hover {
    cursor: pointer;
    color: #d8c302;
  }
`;
const Hold = styled.div`
  display: flex;
  margin-top: 50px;
`;
const BigTxt = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: #2e2b2b;
  margin-top: 50px;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
`;
const Icon1 = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  :hover {
    cursor: pointer;
    color: #d8c302;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 430px;
  background-color: rgb(239, 239, 246);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;
