"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface Props {
  revenue: {
    month: string;
    revenue: number | string;
    _id: string;
  }[];
}

const ChartClient = ({ revenue }: Props) => {
  return (
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart data={revenue} height={350}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="revenue" fill={chartConfig.revenue.color} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
};

export default ChartClient;
