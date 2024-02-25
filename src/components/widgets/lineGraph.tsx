import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { LineData } from "../../assets/Dashboard/tableData";

type Props = {
  dim: number;
  col: number;
};

export default function LineGraph({ dim, col }: Props) {
  return (
    <Box
      sx={{
        width: "11.875rem",
        height:
          dim === 1 ? "25.9375rem" : dim == 2 ? "38.9375rem" : "11.875rem",
        flexShrink: 0,
        borderRadius: "0.9375rem",
        border: "1px solid #E7E7E7",
        background: col === 1 ? "#FFF" : col === 2 ? "#282828" : "#5E5ADB",
        boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
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
                color: col === 1 ? "#5E5ADB" : "#F4F4F4",
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
          <LineChart width={150} height={dim === 3 ? 120 :dim===2?300: 200} data={LineData}>
            <Line type="monotone" dataKey="a" stroke="#5FDC8F" />
            <Line type="monotone" dataKey="b" stroke="#5E5ADB" />
            <Line type="monotone" dataKey="c" stroke="#FF8E8E" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </Box>
        {dim === 1 ? (
          <>
            <Box >
              <Typography>Christmas25</Typography>
              <Typography variant="subtitle2">5,700</Typography>
            </Box>
            <Box>
              <Typography>BirthdaySpecial25</Typography>
              <Typography variant="subtitle2">27,500</Typography>
            </Box>
            <Box>
              <Typography>Newuser30</Typography>
              <Typography variant="subtitle2">56,700</Typography>
            </Box>
          </>
        ) : dim === 2 ? (
          <Box sx={{color:"#F3F3F3"}}>
            <Box>
              <Typography>Christmas25</Typography>
              <Typography variant="subtitle2">5,700</Typography>
            </Box>
            <Box>
              <Typography>BirthdaySpecial25</Typography>
              <Typography variant="subtitle2">27,500</Typography>
            </Box>
            <Box>
              <Typography>Newuser30</Typography>
              <Typography variant="subtitle2">56,700</Typography>
            </Box>
            <Box>
              <Typography>Christmas25</Typography>
              <Typography variant="subtitle2">50,700</Typography>
            </Box>
            <Box>
              <Typography>BirthdaySpecial25</Typography>
              <Typography variant="subtitle2">51,700</Typography>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Stack>
    </Box>
  );
}
