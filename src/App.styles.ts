import styled from "styled-components";
import { IconButton } from "@mui/material";

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
