import { Box, Divider, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { rows1, Row1 } from "../../assets/Dashboard/tableData";

function BigData() {
  return (
    <Box
      sx={{
        width: "26.125rem",
        height: "25.5rem",
        flexShrink: 0,
        borderRadius: "0.9375rem",
        border: "1px solid #757575",
        background: " #282828",
        boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)",
        padding: "0.6rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="column">
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                color: "#F4F4F4",
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
        <table>
          <thead>
            <tr>
              <th
                align="left"
                style={{
                  color: "#F1F1F2",
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
                  color: "#F1F1F2",
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
                  color: "#F1F1F2",
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
              <th
                align="left"
                style={{
                  color: "#F1F1F2",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.125rem",
                  textTransform: "uppercase",
                }}
              >
                Q3-23
              </th>
              <th
                align="left"
                style={{
                  color: "#F1F1F2",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.125rem",
                  textTransform: "uppercase",
                }}
              >
                Q4-23
              </th>
              <th
                align="left"
                style={{
                  color: "#F1F1F2",
                  fontFamily: "Inter",
                  fontSize: "0.625rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.125rem",
                  textTransform: "uppercase",
                }}
              >
                Q1-24
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
              fontFamily: "Inter",
              fontSize: "0.6875rem",
              fontStyle: " normal",
              fontWeight: "400",
              lineHeight: "1.125rem",
            }}
          >
            {rows1.map((row: Row1) => (
              <tr key={row.pr}>
                <td align="left">{row.pr}</td>
                <td align="left">{row.q1}</td>
                <td align="left">{row.q2}</td>
                <td align="left">{row.q3}</td>
                <td align="left">{row.q4}</td>
                <td align="left">{row.q5}</td>
              </tr>
            ))}
          </tbody>
          <thead
            style={{
              color: "rgba(255, 255, 255, 0.65)",
              fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "1.125rem",
            }}
          >
            <tr>
              <th align="left">Total</th>
              <th align="left"> 8%</th>
              <th align="left">12%</th>
              <th align="left">7%</th>
              <th align="left">20%</th>
              <th align="left">3%</th>
            </tr>
          </thead>
        </table>
      </Stack>
    </Box>
  );
}

export default BigData;
