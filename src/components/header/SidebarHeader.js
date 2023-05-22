import { styled , Box} from "@mui/material";
import React from "react";

const StyledSidebarHeader = styled(Box)(() => ({
  padding: "0 15px",
  height: "64px",
  display: "flex",
  alignItems: "center",
}));

export const SidebarHeader = () => {
  return <StyledSidebarHeader>some logo</StyledSidebarHeader>;
};
