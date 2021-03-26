import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.header.background};
  padding: 50px;
  position: relative;
  transition: background 0.3s;

  @media screen and (max-width: 600px) {
    padding: 30px;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300px;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Brand = styled.div`
  font-size: 55px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
