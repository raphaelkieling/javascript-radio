import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.header.background};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;
