import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -15px;
`;

export const IconContainer = styled.div`
  display: flex;
  border-radius: 50%;
  margin-left: 10px;
  background: #f2f2f2;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  padding: 5px;
  box-sizing: border-box;

  svg {
    fill: gray;
  }
`;

export const Button = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background: white;
  border: none;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;

  &:hover ${IconContainer} {
    background: #f7eb91;
  }

  &:hover ${IconContainer} svg {
    fill: #b8a606;
  }
`;

export const SubscriptionContainer = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background: white;
`;
