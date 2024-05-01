import React, {useEffect, useRef} from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import {Box} from "@mui/material";
import {IChartData} from "../../models/ChartModels";

interface ChartProps {
    data: IChartData[]
}

const Chart = ({data}: ChartProps) => {
    const backgroundColor = 'black',
        lineColor = '#2962FF',
        textColor = 'white',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)'

    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(!chartContainerRef.current) {
            return
        }
        const handleResize = () => {
            if(chartContainerRef.current) {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
        newSeries.setData(data);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

            chart.remove();
        };
    }, [data, chartContainerRef, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])

    return (
        <Box sx={{width: "100%", height: "900px"}} ref={chartContainerRef}/>
    );
};

export default Chart;