import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import Layout from "../assets/Modal/layout-dashboard.svg";
import Bar from "../assets/Modal/bar-chart-01.svg";
import Line from "../assets/Modal/graph-02.svg";
import Pie from "../assets/Modal/pie-chart-02.svg";
import HistoryIcon from "@mui/icons-material/History";
import { blue, pink } from "@mui/material/colors";
import { useData } from "../context/widgetContext";
import SmallData from "./widgets/smallData";
import SummaryData from "./widgets/summary";
import BarGraph from "./widgets/barGraph";
import LineGraph from "./widgets/lineGraph";
import PieChart from "./widgets/pieChart";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

function AddWidget(props: ModalProps) {
  const { widgets, setWidgets } = useData();

  const [color, setColor] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(parseInt(event.target.value, 10));
  };
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [type, setType] = useState<number>(1);
  const [graphType, setGraphType] = useState<number>(1);
  const [name,setName] = useState<string>("Widget");
  const handleSubmit = () => {
    const newWidget = {
      color: color,
      type: type,
      graphType: graphType,
      name: name,
    };
    setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
    console.log(widgets);
  };

  return (
    <Modal open={props.isOpen} onClose={props.handleClose}>
      <Box
        sx={{
          width: "66.25rem",
          height: "39.5rem",
          flexShrink: 0,
          borderRadius: "1.25rem",
          background: "#FFF",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack direction="column" sx={{ padding: "1rem" }}>
          <Stack direction="row-reverse">
            <IconButton
              onClick={props.handleClose}
              sx={{ width: " 0.99rem", height: "0.99rem", flexShrink: 0 }}
            >
              <ClearIcon />
            </IconButton>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row">
              <img
                alt=""
                src={Layout}
                style={{
                  display: "flex",
                  width: "3rem",
                  height: "3rem",
                  padding: "0.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  borderRadius: "0.375rem",
                  border: "1px solid #E0DFF8",
                }}
              />
              <Box sx={{ padding: "0.6rem" }}>
                <Typography
                  sx={{
                    width: "44rem",
                    color: "#5E5ADB",
                    fontFamily: "Geist",
                    fontSize: "1.375rem",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: " 1.75rem",
                  }}
                >
                  Create Widget
                </Typography>
                <Typography
                  sx={{
                    width: "44rem",
                    color: "#888891",
                    fontFamily: "Geist",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: "1.25rem",
                  }}
                >
                  Manage the glossary of terms of your Database.
                </Typography>
              </Box>
            </Stack>
            <Box
              sx={{
                borderRadius: "0.375rem",
                border: "1px solid #CBD5E1",
                background: "#FFF",
                display: "flex",
                width: "23.4375rem",
                padding: "0.5rem 0.75rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField variant="standard" placeholder="Enter Title" value={name} onChange={handleName}/>
              <Box onClick={()=>setName("Widget")}>
                <IconButton>
                  <ClearIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Divider />
        <Grid container sx={{ padding: "1rem" }}>
          <Grid item xs={8}>
            <Box
              sx={{
                width: "40.0625rem",
                height: "28.5rem",
                flexShrink: 0,
                borderRadius: "0.9375rem",
                background: "rgba(213, 213, 213, 0.15)",
                border: "1px solid #E0DFF8",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                padding: "1rem",
              }}
            >
              <Stack direction="column">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      color: "rgba(94, 90, 219, 0.70)",
                      fontFamily: "Geist",
                      fontSize: "1.125rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "0.875rem",
                    }}
                  >
                    1 x 1
                  </Typography>
                  <Stack
                    sx={{
                      width: "7.8125rem",
                      height: "2.0625rem",
                      flexShrink: 0,
                      borderRadius: "0.125rem",
                      border: "0.5px solid #D7D7D7",
                      background: "#FFF",
                      boxShadow: "0px 4px 4px -4px rgba(0, 0, 0, 0.10)",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    direction="row"
                  >
                    <Typography sx={{ padding: "0.4rem", color: "#7B7B7B" }}>
                      100%
                    </Typography>
                    <Divider orientation="vertical" />
                    <ZoomInIcon sx={{ padding: "0.4rem", color: "#7B7B7B" }} />
                    <Divider orientation="vertical" />
                    <ZoomOutIcon sx={{ padding: "0.4rem", color: "#7B7B7B" }} />
                  </Stack>
                </Box>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ top: "50%", right: "50%" }}
                >
                  <Typography>{name}</Typography>
                  {type === 1 ? (
                    <SmallData col={color} dim={1} />
                  ) : type === 2 ? (
                    graphType === 1 ? (
                      <BarGraph dim={3} col={color}/>
                    ) : graphType === 2 ? (
                      <LineGraph dim={3} col={color}/>
                    ) : (
                      <PieChart col={color}/>
                    )
                  ) : (
                    <SummaryData dim={3} col={color} />
                  )}
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: "auto" }}
              >
                <RadioGroup row>
                  <Radio
                    value={2}
                    checked={color === 2}
                    onChange={handleChange}
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                  <Radio
                    value={1}
                    checked={color === 1}
                    onChange={handleChange}
                    sx={{
                      color: "#CECECE",
                      "&.Mui-checked": {
                        color: "#CECECE",
                      },
                    }}
                  />
                  <Radio
                    value={3}
                    checked={color === 3}
                    onChange={handleChange}
                    sx={{
                      color: blue[800],
                      "&.Mui-checked": {
                        color: blue[600],
                      },
                    }}
                  />
                </RadioGroup>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                color: "rgba(43, 43, 43, 0.35)",
                fontFamily: "Geist",
                fontSize: "0.8125rem",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "0.875rem",
                letterSpacing: "0.01625rem",
                textTransform: "uppercase",
              }}
            >
              Components
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                margin: "0.6rem",
                padding: "1rem",
                alignI: "center",
                borderRadius: "0.5rem",
                border: type === 1 ? "1.5px solid #5E5ADB" : "none",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => setType(1)}
            >
              <Stack direction="column">
                <Typography
                  sx={{
                    color: "#585858",
                    fontFamily: "Geist",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "1.5rem",
                  }}
                >
                  Data
                </Typography>
                <Typography
                  sx={{
                    color: "#888891",
                    fontFamily: "Geist",
                    fontSize: "0.8rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.2rem",
                  }}
                >
                  Description
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                margin: "0.6rem",
                padding: "1rem",
                alignI: "center",
                borderRadius: "0.5rem",
                border: type === 2 ? "1.5px solid #5E5ADB" : "none",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => setType(2)}
            >
              <Stack direction="column">
                <Typography
                  sx={{
                    color: "#585858",
                    fontFamily: "Geist",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "1.5rem",
                  }}
                >
                  Graph
                </Typography>
                <Typography
                  sx={{
                    color: "#888891",
                    fontFamily: "Geist",
                    fontSize: "0.8rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.2rem",
                  }}
                >
                  Description
                </Typography>
                <Stack direction="row">
                  <img
                    alt=""
                    src={Bar}
                    style={{
                      display: "flex",
                      width: "2.82rem",
                      height: "1.23375rem",
                      padding: "0.26438rem 0.52875rem",
                      justifyContent: "center",
                      alignItems: " center",
                      gap: "0.44063rem",
                      borderRadius: "0.26438rem",
                      background: graphType === 1 ? " #FFF" : "#F4F4F5",
                      boxShadow:
                        graphType === 1
                          ? "0px 0.705px 2.115px 0px rgba(0, 0, 0, 0.10), 0px 0.705px 1.41px -0.705px rgba(0, 0, 0, 0.10)"
                          : "none",
                    }}
                    onClick={() => setGraphType(1)}
                  />
                  <img
                    alt=""
                    src={Line}
                    style={{
                      display: "flex",
                      width: "2.82rem",
                      height: "1.23375rem",
                      padding: "0.26438rem 0.52875rem",
                      justifyContent: "center",
                      alignItems: " center",
                      gap: "0.44063rem",
                      borderRadius: "0.26438rem",
                      background: graphType === 2 ? " #FFF" : "#F4F4F5",
                      boxShadow:
                        graphType === 2
                          ? "0px 0.705px 2.115px 0px rgba(0, 0, 0, 0.10), 0px 0.705px 1.41px -0.705px rgba(0, 0, 0, 0.10)"
                          : "none",
                    }}
                    onClick={() => setGraphType(2)}
                  />
                  <img
                    alt=""
                    src={Pie}
                    style={{
                      display: "flex",
                      width: "2.82rem",
                      height: "1.23375rem",
                      padding: "0.26438rem 0.52875rem",
                      justifyContent: "center",
                      alignItems: " center",
                      gap: "0.44063rem",
                      borderRadius: "0.26438rem",
                      background: graphType === 3 ? " #FFF" : "#F4F4F5",
                      boxShadow:
                        graphType === 3
                          ? "0px 0.705px 2.115px 0px rgba(0, 0, 0, 0.10), 0px 0.705px 1.41px -0.705px rgba(0, 0, 0, 0.10)"
                          : "none",
                    }}
                    onClick={() => setGraphType(3)}
                  />
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                margin: "0.6rem",
                padding: "1rem",
                alignI: "center",
                borderRadius: "0.5rem",
                border: type === 3 ? "1.5px solid #5E5ADB" : "none",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => setType(3)}
            >
              <Stack direction="column">
                <Typography
                  sx={{
                    color: "#585858",
                    fontFamily: "Geist",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "1.5rem",
                  }}
                >
                  Summary
                </Typography>
                <Typography
                  sx={{
                    color: "#888891",
                    fontFamily: "Geist",
                    fontSize: "0.8rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.2rem",
                  }}
                >
                  Description
                </Typography>
              </Stack>
            </Box>
            <Stack direction="row" sx={{ width: "100%" }} spacing={3}>
              <IconButton
                sx={{
                  display: "inline-flex",
                  height: "3.125rem", // Match the height of other buttons
                  padding: "0.61456rem 1.22919rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.61456rem",
                  flexShrink: "0",
                  borderRadius: "0.375rem",
                  border: "1px solid #E0DFF8",
                  background: "#F8F8FF",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                <HistoryIcon />
              </IconButton>

              <Button
                sx={{
                  display: "flex",
                  height: "3.125rem",
                  padding: "0.625rem 2.9375rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.375rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #E4E4E7",
                  background: "#FFF",
                  color: "#9F9F9F",
                }}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  display: "flex",
                  width: "7.625rem",
                  height: "3.125rem",
                  padding: "0.625rem 3.1875rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.25rem",
                  borderRadius: "0.375rem",
                  background: "#5E5ADB",
                  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  color: "#FFFFFF",
                }}
                onClick={() => handleSubmit()}
                variant="contained"
              >
                Save
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default AddWidget;
