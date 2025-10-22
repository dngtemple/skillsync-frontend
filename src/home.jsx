"use client"
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Bar, BarChart , CartesianGrid,XAxis,Label, Pie, PieChart,LabelList, RadialBar, RadialBarChart } from "recharts"

import {  ChartContainer,ChartTooltip,ChartTooltipContent, } from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"


export default function Home() {

  const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 1.5 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 2.5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 2 },]

  const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ]

  const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
}


  return (
    <section className=' w-full flex flex-col gap-2 h-full'>
    <Card className="bg-indigo-100 border border-indigo-300 shadow-lg rounded-2xl p-4">
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl font-semibold text-indigo-400">
            Welcome Back, Clinton!
          </h1>
        </CardTitle>
        <CardDescription className="text-indigo-600">
          Here’s a quick summary of your activity
        </CardDescription>
      </CardHeader>
    </Card>


    <div className='flex gap-2'>

    <Card className="flex flex-col w-[50%] border-indigo-300 shadow-lg rounded-2xl ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Active Courses</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

    </Card>

    <Card className="w-[50%]  border-indigo-300 shadow-lg rounded-2xl p-4">
      <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
      <CardContent>
        <ChartContainer config={{
          bar: {
            label: "Hours Studied",
            color: "#C7D2FE",
          },
        }}  className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Bar dataKey="hours" fill="var(--color-bar)"  radius={4} />
      </BarChart>
       </ChartContainer>
        
      </CardContent>

    </Card>

    </div>
    </section>

  )
}
