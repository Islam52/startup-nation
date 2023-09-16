import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";

export const HeroSection = () => {
  return <div>

    
  </div>;
};

const { containers, mqMax } = theme;

const Container = styled.div`

  max-width: ${containers.main};
  margin: 0 auto;
  ${mqMax("xxl")} {
    padding: 0 20px;
  }
`;
