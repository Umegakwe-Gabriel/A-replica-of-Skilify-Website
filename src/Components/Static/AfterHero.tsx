import React from "react";
import styled from "styled-components";
import Card from "../Reuse/Card";
import Button from "../Reuse/Button";
import img from "../../Assets/pantone (1).svg"
import img1 from "../../Assets/monitor.svg"

const AfterHero = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Words>Choice favourite course from top category</Words>
            <Button text="See All Categories" w="200px" h="60px" />
          </Div>
          <CardHolder>
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(229,231,235)"
              bgc="orange"
              image={img}
              dd="orangered"
              bgd="blue"

            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Development"
              bcc="rgb(226,221,255)"
              bgc="purple"
              image={img1}
              dd="violet"
              bgd="pink"
            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(254,243,232)"
            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(221,247,255)"
            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(230,250,234)"
            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(230,250,234)"
            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(221,247,255)"
            />
            <Card
              st="Learn how to design your website. We have a wide range of designing
          courses from which you can select the best that suits you."
              bt="Design"
              bcc="rgb(254,243,232)"
            />
          </CardHolder>
        </Main>
      </Container>
    </div>
  );
};

export default AfterHero;

const Words = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #302d2d;
`;

const Div = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
