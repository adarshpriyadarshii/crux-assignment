import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import BigData from "./widgets/bigData";
import SmallData from "./widgets/smallData";
import SummaryData from "./widgets/summary";
import PieChart from "./widgets/pieChart";
import LineGraph from "./widgets/lineGraph";
import BarGraph from "./widgets/barGraph";
import { Widget, useData } from "../context/widgetContext";

function Dashboard() {
  const { widgets } = useData();
  return (
    <Box sx={{ padding: "2.31rem", background: "#F4F4FF" }} >
      <Grid container>
        <Grid container xs={4}>
          <Grid item xs={6}>
            <SmallData col={1} dim={1} />
          </Grid>
          <Grid item xs={6}>
            <SmallData col={3} dim={1} />
          </Grid>
          <Grid item xs={12}>
            <BigData />
          </Grid>
          <Grid item xs={6}>
            <SmallData col={2} dim={1} />
          </Grid>
          <Grid item xs={6}>
            <SmallData col={3} dim={1} />
          </Grid>
        </Grid>
        <Grid container xs={8}>
          <Grid item xs={12}>
            <Stack direction="row">
              <BarGraph dim={2} col={2} />
              <SmallData col={1} dim={2} />
              <SummaryData dim={1} col={1} />
            </Stack>
          </Grid>
          <Grid container xs={6} marginTop="0.6rem">
            <Grid item xs={12} marginBottom={1}>
              <SummaryData dim={2} col={1} />
            </Grid>
            <Grid item xs={6}>
              <LineGraph dim={1} col={1} />
            </Grid>
            <Grid container xs={6}>
              <Grid item xs={12}>
                <SmallData col={2} dim={1} />
              </Grid>
              <Grid item xs={12}>
                <LineGraph dim={3} col={1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={6} marginTop="0.6rem">
            <Grid item xs={6}>
              <LineGraph dim={2} col={2} />
            </Grid>
            <Grid container xs={6}>
              <Grid item xs={12}>
                <PieChart col={1} />
              </Grid>
              <Grid item xs={12}>
                <BarGraph dim={1} col={1} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container >
        {widgets?.map((widget: Widget) => (
          <Grid item xs={2} marginBottom={1}>
            {widget.type === 1 ? (
              <SmallData col={widget.color} dim={1} />
            ) : widget.type === 2 ? (
              widget.graphType === 1 ? (
                <BarGraph dim={3} col={widget.color} />
              ) : widget.graphType === 2 ? (
                <LineGraph dim={3} col={widget.color} />
              ) : (
                <PieChart col={widget.color} />
              )
            ) : (
              <SummaryData dim={3} col={widget.color} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
