import { Box, Divider, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

type Props = {
  dim: number;
  col: number;
};

function SummaryData({ dim, col }: Props) {
  return (
    <Box
      sx={{
        width: dim === 1 ? "27.25rem" : dim == 2 ? "25.375rem" : "11.875rem",
        height: "11.875rem",
        flexShrink: "0",
        borderRadius: dim === 1 ? "0rem 0.9375rem 0.9375rem 0rem" : "0.9375rem",
        background: col === 1 ? "#FFF" : col === 2 ? "#282828" : "#5E5ADB",
        boxShadow: dim === 1 ? "" : "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
        padding: "0.6rem",
        alignItems: "center",
        border: "1px solid #E6E6E6",
        justifyContent: "center",
      }}
    >
      <Stack direction="column">
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row">
            <Typography
              sx={{
                color: "#BBBBBB",
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
                color: "#BBBBBB",
                width: "1rem",
                height: "1rem",
              }}
            />
          </Stack>
          <MoreHorizIcon sx={{ color: "#BBBBBB" }} />
        </Box>
        <Divider sx={{ width: dim === 3 ? "11.875rem" : "25.375rem" }} />
        <Box alignItems="center" justifyContent="center" padding="1rem">
          {dim === 3 ? (
            <Typography
              sx={{
                color: col === 1 ? "rgba(0, 0, 0, 0.80)" : "#F4F4F4",
                fontFamily: "Geist",
                fontSize: "0.75rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "1.125rem",
              }}
            >
              Based on the provided data, the most effective hour of the day to
              send an email across all stores for all time, with the highest
              engagement after opening, is at 15:00(3 PM)..
            </Typography>
          ) : (
            <Typography
              sx={{
                color: col === 1 ? "rgba(0, 0, 0, 0.80)" : "#F4F4F4",
                fontFamily: "Geist",
                fontSize: "0.75rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "1.125rem",
              }}
            >
              Based on the provided data, the most effective hour of the day to
              send an email across all stores for all time, with the highest
              engagement after opening, is at 15:00(3 PM), with a total of 5041
              emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5
              PM) with 5007 and 4785 emails opened respectively. There is a
              noticeable drop in
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default SummaryData;
