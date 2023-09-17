import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../styles/theme";
import Button from "../button/Button";
import logo from "../../../assets/svg/кут-тенгри.svg";
import { Link } from "react-router-dom";
interface IArray {
  label: string | any;
}
export const Header = () => {
  const array = [
    {
      label: "Главная",
    },

    {
      label: "отзывы",
      link: "/reviews",
    },
    {
      label: "контакты",
    },
  ];
  return (
    <HeaderWrapper>
      <Container>
        <InnerItems>
          <img src={logo} alt="" />
          {array.map((item, index) => (
            <Link to={item && item?.link} key={index}>
              {item.label}
            </Link>
          ))}
          <Button>Регистрация</Button>
        </InnerItems>
      </Container>
    </HeaderWrapper>
  );
};

const { containers, mqMax } = theme;

const HeaderWrapper = styled.header`
  padding: 52px 0 77px 0;
`;

const Container = styled.div`
  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 0 20px;
  }
`;

const InnerItems = styled.div`
  display: flex;
  column-gap: 102px;
`;
