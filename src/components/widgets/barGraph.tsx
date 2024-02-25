import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { BarData } from "../../assets/Dashboard/tableData";

type Props={
    dim:number
    col:number
}

export default function BarGraph({dim,col}:Props) {
  return (
    <Box
      sx={{
        width:dim===1? "11.875rem":dim===2?"12.75rem":"11.875rem",
        height: dim===1? "25.3125rem":dim===2?"11.875rem":"11.875rem",
        flexShrink: 0,
        borderRadius: dim===1?"0.9375rem":dim===2?"0.9375rem 0rem 0rem 0.9375rem":"0.9375rem",
        border: "1px solid #E7E7E7",
        background:col===1? "#FFF":col===2?"#282828":"#5E5ADB",
        boxShadow: dim===3?"0px 0px 6px 0px rgba(0, 0, 0, 0.10)":"",
        display: "flex",
        padding: "0.6rem",
        justifyContent: "center",
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
        <Box alignContent="center" marginLeft="auto">
          <BarChart
            width={150}
            height={dim===1?300:120}
            data={BarData}
          >
            <Bar dataKey="value" fill={col===3?"#FFF":"#8884d8"} />
            <XAxis dataKey="name" />
            <YAxis />
            
          </BarChart>
        </Box>
      </Stack>
    </Box>
  );
}
