import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import rulon from "../../assets/png/2302.w058.n003.247B.p1 1.png";
import card from "../../assets/png/IMG_0010.png";
import smallCard from "../../assets/png/smallCard.png";
import Button from "../../shared/ui/button/Button";
export const HeroSection = () => {
  return (
    <Wrapper>
      <Container>
        <MainItems>
          <Rulon>
            <SmallCard>
              <img src={smallCard} alt="" />
            </SmallCard>
            <img src={rulon} alt="" />

            <Text>
              <h4>Консультация с психологом онлайн:</h4>
              <h3>
                обрести
                <br />
                спокойствие
              </h3>
            </Text>
          </Rulon>
          <Card>
            <img src={card} alt="" />
          </Card>
        </MainItems>
        <Button/>
      </Container>
    </Wrapper>
  );
};

const { containers, mqMax } = theme;
const Text = styled.div`
  max-width: 432px;
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  top: 320px;
  left: 330px;
  transform: rotate(-5deg);
  h4 {
    color: #fff;
    font-family: Noto Sans;
    font-size: 39px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 39px */
  }
  h3 {
    color: #522b15;
    font-family: Noto Sans;
    font-size: 39px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 39px */
  }
`;
const Wrapper = styled.div``;
const SmallCard = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 360px;
  left: 400px;
`;
const Card = styled.div`
  position: absolute;
  left: 770px;
`;
const Rulon = styled.div`
  margin-top: 120px;
`;
const MainItems = styled.div`
  display: flex;
`;
const Container = styled.div`
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 0 20px;
  }
`;
