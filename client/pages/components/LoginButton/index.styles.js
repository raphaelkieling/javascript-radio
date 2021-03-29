import styled from "styled-components";

export const LoginButtonContainer = styled.button`
  border-radius: 0.4rem;
  border: none;
  padding: 8px 10px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: ${({ theme }) => theme.loginButton.backgroundIdle};

  &:hover {
    background: ${({ theme }) => theme.loginButton.backgroundHover};
  }
`;
