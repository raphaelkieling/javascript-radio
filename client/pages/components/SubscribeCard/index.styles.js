import styled from "styled-components";

export const DialogContainer = styled.dialog`
  border: none;
  padding: 0px;
  position: fixed;
`;

export const Overlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
`;

export const ModalContainer = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background: white;
  height: 400px;
  width: 300px;
  padding: 10px;
`;

export const ContainerClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
