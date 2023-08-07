import { ResponsiveLine } from "@nivo/line";
import { useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineChart = ({ showdata }: any) => {
  const chartData = showdata.length > 0 && [...showdata];
  let data: any[] = [];
  console.log(chartData)
  if (chartData) {
    data = [
      {
        id: chartData[2]?.title,
        color: "hsl(85, 70%, 50%)",
        data: chartData[2].details?.map((item: any) => ({
          x: item.date,
          y: item.value,
        })),
      },
      {
        id: showdata[1].title,
        color: "hsl(201, 70%, 50%)",
        data: showdata[1].details.map((item: any) => ({
          x: item.date,
          y: item.value,
        })),
      },
      {
        id: showdata[0].title,
        color: "hsl(254, 70%, 50%)",
        data: showdata[0].details.map((item: any) => ({
          x: item.date,
          y: item.value,
        })),
      },
      {
        id: showdata[3].title,
        color: "hsl(221, 70%, 50%)",
        data: showdata[3].details.map((item: any) => ({
          x: item.date,
          y: item.value,
        })),
      },
      {
        id: showdata[4].title,
        color: "hsl(221, 70%, 50%)",
        data: showdata[4].details.map((item: any) => ({
          x: item.date,
          y: item.value,
        })),
      },
    ];
  }

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "gray",
            },
          },
        },
        legends: {
          text: {
            fill: "black",
          },
        },
        tooltip: {
          container: {
            color: "#059669",
          },
        },
      }}
      enableGridX={false}
      colors={{ scheme: "set1" }}
      margin={{ top: 30, right: 110, bottom: 70, left: 110 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: 5,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          translateX: -250,
          translateY: 50,
          itemsSpacing: 10,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default LineChart;
