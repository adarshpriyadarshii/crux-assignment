import { Box, Divider, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { rows, Row } from "../../assets/Dashboard/tableData";
import React from "react";

type BoxProps = {
  col:number;
  dim:number
};

function SmallData({ col,dim }: BoxProps) {
  return (
    <Box
      sx={{
        display:dim===1? "flex":"",
        width: dim===1?"11.875rem":"12.75rem",
        height: "11.875rem",
        flexShrink: 0,
        borderRadius:dim===1? "0.9375rem":"",
        border: "1px solid #E6E6E6",
        background:col===1? "#FFF":col===2?"#282828":"#5E5ADB",
        boxShadow: dim===1?"0px 0px 6px 0px rgba(0, 0, 0, 0.10)":"",
        padding: "0.6rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="column">
        <Box display="flex" justifyContent="space-between">
          {col === 3 ? (
            <Stack direction="row">
              <Typography
                sx={{
                  color: "#F4F4F4",
                  fontFamily: "Geist",
                  fontSize: "0.6875rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.125rem",
                }}
              >
                Today
              </Typography>
              <KeyboardArrowDownIcon
                sx={{
                  color: "#EBEBEB",
                  width: "1rem",
                  height: "1rem",
                }}
              />
            </Stack>
          ) : (
            <Stack direction="row" spacing={3}>
              <Typography
                sx={{
                  color: col===2? "#F4F4F4" : "#5E5ADB",
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
          )}

          <MoreHorizIcon sx={{ color: "#BBBBBB" }} />
        </Box>
        <Divider sx={{ width: "11.875rem" }} />
        <table>
          <thead>
            <tr>
              <th
                align="left"
                style={{
                  color: col===1 ? "#5E5ADB" : "#F1F1F2",
                  fontFamily: "Inter",
                  fontSize: "0.6875rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "1.125rem",
                  textTransform: "uppercase",
                }}
              >
                Product
              </th>
              <th
                align="left"
                style={{
                  color: "#ABA8FF",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.125rem",
                  textTransform: "uppercase",
                }}
              >
                
                Q1-23
              </th>
              <th
                align="left"
                style={{
                  color: "#ABA8FF",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.125rem",
                  textTransform: "uppercase",
                }}
              >
                Q2-23
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              color:
                col===1
                  ? "rgba(71, 71, 71, 0.65)"
                  : "rgba(255, 255, 255, 0.65)",
              fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
              fontFamily: "Inter",
              fontSize: "0.6875rem",
              fontStyle: " normal",
              fontWeight: "400",
              lineHeight: "1.125rem",
            }}
          >
            {rows.map((row: Row) => (
              <tr key={row.pr}>
                <td align="left">{row.pr}</td>
                <td align="left">{row.q1}</td>
                <td align="left">{row.q2}</td>
              </tr>
            ))}
          </tbody>
          <thead
            style={{
              color:
                col===1
                  ? "rgba(57, 57, 57, 0.90)"
                  : "rgba(255, 255, 255, 0.65)",
              fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "1.125rem",
            }}
          >
            <tr>
              <th align="left">Total</th>
              <th align="left"> 8%</th>
              <th align="left">12%</th>
            </tr>
          </thead>
        </table>
      </Stack>
    </Box>
  );
}

export default SmallData;
