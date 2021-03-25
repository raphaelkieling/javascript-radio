import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Details = styled.details`
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-bottom: 10px;

  summary {
    outline: none;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const When = styled.span`
  font-size: 13px;
  color: #939393;
  display: flex;
  align-items: center;
`;

export const ClockIcon = styled(AiOutlineClockCircle)`
  margin-left: 10px;
  margin-right: 3px;
`;
