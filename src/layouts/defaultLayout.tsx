import { Box, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import SideBar from "../components/common/sideBar";
import TopBar from "../components/common/topBar";
import { ChildCare } from "@mui/icons-material";

type LayoutProps = {
  children: ReactNode;
};

function DefaultLayout(props: LayoutProps) {
  return (
    <Box display="flex" height="100vh">
      <SideBar />
      <Box flexGrow={1} display="flex" flexDirection="column">
        <TopBar />
        <Box flexGrow={1} overflow="auto">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

export default DefaultLayout;
