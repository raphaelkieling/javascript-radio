import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.logo.background};
  color: ${({ theme }) => theme.logo.text};
  transition: background 0.3s;
  padding: 10px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
