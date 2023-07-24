import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "id": "Views",
        "color": "hsl(85, 70%, 50%)",
        "data": [
            {
                "x": "Mon",
                "y": 26
            },
            {
                "x": "Tue",
                "y": 119
            },
            {
                "x": "Wed",
                "y": 260
            },
            {
                "x": "Thu",
                "y": 113
            },
            {
                "x": "Fri",
                "y": 257
            },
            {
                "x": "Sat",
                "y": 229
            },
            {
                "x": "Sun",
                "y": 146
            },
        ]
    },
    {
        "id": "Applications",
        "color": "hsl(201, 70%, 50%)",
        "data": [
            {
                "x": "Mon",
                "y": 42
            },
            {
                "x": "Tue",
                "y": 252
            },
            {
                "x": "Wed",
                "y": 179
            },
            {
                "x": "Thu",
                "y": 67
            },
            {
                "x": "Fri",
                "y": 155
            },
            {
                "x": "Sat",
                "y": 221
            },
            {
                "x": "Sun",
                "y": 109
            },
        ]
    },
    {
        "id": "Mettings",
        "color": "hsl(254, 70%, 50%)",
        "data": [
            {
                "x": "Mon",
                "y": 229
            },
            {
                "x": "Tue",
                "y": 117
            },
            {
                "x": "Wed",
                "y": 18
            },
            {
                "x": "Thu",
                "y": 163
            },
            {
                "x": "Fri",
                "y": 269
            },
            {
                "x": "Sat",
                "y": 184
            },
            {
                "x": "Sun",
                "y": 253
            },
        ]
    },
    {
        "id": "Hirings",
        "color": "hsl(221, 70%, 50%)",
        "data": [
            {
                "x": "Mon",
                "y": 57
            },
            {
                "x": "Tue",
                "y": 82
            },
            {
                "x": "Wed",
                "y": 263
            },
            {
                "x": "Thu",
                "y": 171
            },
            {
                "x": "Fri",
                "y": 156
            },
            {
                "x": "Sat",
                "y": 121
            },
            {
                "x": "Sun",
                "y": 400
            },
        ]
    },
]
const LineChart = () => {
    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis:{
                    domain:{
                        line:{
                            stroke: 'gray'
                        }
                    }
                },
                legends:{
                    text:{
                        fill: 'black'
                    }
                        
                },
                tooltip:{
                    container:{
                        color: '#059669'
                    }
                }
            }}
            enableGridX={false}
            colors={{ scheme: 'greens' }}
            margin={{ top: 30, right: 110, bottom: 70, left: 110 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
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
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                tickValues:5,
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    justify: false,
                    translateX: -250,
                    translateY: 50,
                    itemsSpacing: 10,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}
export default LineChart
