import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Home from "../../assets/Topbar/home.svg";
import Settings from "../../assets/Topbar/settings.svg";
import AddIcon from "@mui/icons-material/Add";
import AddWidget from "../addWidget";
import './common.css';

function TopBar() {

  const [showModal,setShowModal]=useState<boolean>(false);
  const handleOpen=()=>{
    setShowModal(true);
  }
  const handleClose=()=>{
    setShowModal(false);
  }

  return (
    <>
    <Box
      sx={{
        display: "flex",
        width: "95%",
        height: "4%",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: "0.75rem",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button >
          <img alt="" src={Home} />
        </Button>
        <Button className="TopBarButton" sx={{marginRight:"0.6rem",marginLeft:"0rem"}}>Overview</Button>
        <Button
          endIcon={<ClearIcon />}
          sx={{
            borderRadius: "0.625rem",
            border: "1px solid #E0DFF8",
            background: "#F7F6FD",
          }}
        >
          Customers
        </Button>
        <Button className="TopBarButton">Products</Button>
        <Button className="TopBarButton" sx={{marginRight:"0.6rem"}}>Settings</Button>
        <IconButton
          sx={{
            borderRadius: "0.5rem",
            border: "1px solid rgba(94, 90, 219, 0.15)",
            background: "rgba(94, 90, 219, 0.05)",
          }}
        >
          <AddIcon sx={{ color: "#5E5ADB" }} />
        </IconButton>
      </Box>

      <Box>
        <Button
          startIcon={<AddIcon />}
          sx={{
            borderRadius: "var(--radius-rounded-lg, 0.5rem)",
            border: "1px solid rgba(94, 90, 219, 0.15)",
            background: "rgba(94, 90, 219, 0.05)",
          }}
          onClick={()=>handleOpen()}
        >
          Add Widget
        </Button>
        <AddWidget isOpen={showModal} handleClose={handleClose}/>
        <Button>
          <img alt="" src={Settings} />
        </Button>
      </Box>
    </Box>
    </>
    
  );
}

export default TopBar;
