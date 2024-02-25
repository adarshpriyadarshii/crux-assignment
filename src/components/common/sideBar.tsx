import { Box, Button } from "@mui/material";
import React from "react";
import Avatar from "../../assets/Sidebar/Avatar.png";
import Activity from "../../assets/Sidebar/activity.svg";
import BarChart from "../../assets/Sidebar/bar-chart-square-02.svg";
import Logo from "../../assets/Sidebar/L2493.svg";
import Message from "../../assets/Sidebar/message-chat-square.svg";
import Layers from "../../assets/Sidebar/layers-three-01.svg";

function SideBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        borderRight:"#EAECF0",
        width: "5%",
        height: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: "var(--spacing-4xl, 2rem)",
          gap: "var(--spacing-3xl, 1.5rem)",
          alignSelf: "stretch",
        }}
      >
        <Button>
          <img alt="" src={Logo} />
        </Button>
        <Button>
          <img alt="" src={Activity} />
        </Button>
        <Button>
          <img alt="" src={Message} />
        </Button>
        <Button>
          <img alt="" src={Layers} />
        </Button>
        <Button>
          <Box
            sx={{
              display: "flex",
              width: "3rem",
              height: "3rem",
              padding: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.375rem",
              background: "#E9EDF5",
            }}
          >
            <img alt="" src={BarChart} />
          </Box>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0rem 1rem 1.5rem 1rem",
          alignSelf: "center",
        }}
      >
        <Button>
          <img alt="" src={Avatar} />
        </Button>
      </Box>
    </Box>
  );
}

export default SideBar;
