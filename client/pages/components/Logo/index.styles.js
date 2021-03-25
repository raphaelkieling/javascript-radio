import styled from "styled-components";

export const Container = styled.div`
  background: black;
  padding: 10px;
  color: white;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
