import { Box, Divider,Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

type Props={
  col:number
}

function PieChart({col}:Props) {
  return (
    <Box
      sx={{
        width: "11.875rem",
        height: "11.875rem",
        flexShrink: 0,
        borderRadius: "0.9375rem",
        border: "1px solid #E7E7E7",
        background:col===1? "#FFF":col===2?"#282828":"#5E5ADB",
        boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
        display: "flex",
        padding: "0.6rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column">
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                color: col === 1? "#5E5ADB":"#F4F4F4" ,
                fontFamily: "Inter",
                fontSize: "0.6875rem",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "1.125rem",
              }}
            >
              7d
            </Typography>
            <Typography
              sx={{
                color: "#BBBBBB",
                fontFamily: "Inter",
                fontSize: "0.6875rem",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "1.125rem",
              }}
            >
              14d
            </Typography>
            <Typography
              sx={{
                color: "#BBBBBB",
                fontFamily: "Inter",
                fontSize: "0.6875rem",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "1.125rem",
              }}
            >
              30d
            </Typography>
          </Stack>
          <MoreHorizIcon sx={{ color: "#BBBBBB" }} />
        </Box>
        <Divider sx={{ width: "11.875rem" }} />
        <Box
      sx={{
        width: "10rem",
        height: "10rem",
        
        padding: "0.6rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    ><Doughnut data={data} /></Box>
        
      </Stack>
    </Box>
  );
}

export default PieChart;
