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

import { Bar, BarChart } from "recharts"
import {  ChartContainer } from "@/components/ui/chart"



export default function Home() {

  const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 1.5 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 2.5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 2 },]



 

  return (
    <>
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

    <Card className="w-[50%]">
      <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
      <CardContent>
        <ChartContainer config={{
    bar: {
      label: "Hours Studied",
      color: "#C7D2FE",
    },
  }}  className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <Bar dataKey="hours" fill="var(--color-bar)"  radius={4} />
      </BarChart>
    </ChartContainer>
        
      </CardContent>

    </Card>
    </>

  )
}
