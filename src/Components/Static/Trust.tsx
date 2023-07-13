import React from "react";
import styled from "styled-components"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img from "../../Assets/partner.webp"
import img1 from "../../Assets/partner1.webp"
import img2 from "../../Assets/partner2.webp"
import img3 from "../../Assets/partner3.webp"
import img4 from "../../Assets/partner4.webp"
// import img5 from "../../Assets/partner1.webp"
// import img6 from "../../Assets/partner2.webp"
// import Slider from "react-slick"

const Trust = ()=>{
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // }
    return (
        <div>
            <Container>
                <Main>
                <Holder>
          <BigTxt>Trusted by our awesome partners</BigTxt>
          <Hold>
            <Icon>
              <AiOutlineArrowLeft />
            </Icon>
            <Icon1>
              <AiOutlineArrowRight />
            </Icon1>
          </Hold>
          </Holder>
          {/* <Slider {...settings}> */}
          <ImgHold>
          <Img src={img}/>
          <Img src={img1}/>
          <Img src={img2}/>
          <Img src={img3}/>
          <Img src={img4}/>
          <Img src={img}/>
          {/* <Img src={img5}/>
          <Img src={img6}/> */}
          </ImgHold>
          {/* </Slider> */}
                </Main>
            </Container>
        </div>
    )
}

export default Trust;

const Img= styled.img`
/* margin-right: 25px; */
`;

const ImgHold = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`;

const Icon1 = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;

  :hover {
    cursor: pointer;
    color: #d8c302;
  }
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;
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
const Holder = styled.div`
display: flex;
justify-content: space-between;
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

`
const Container = styled.div`
  width: 100%;
  height: 340px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`