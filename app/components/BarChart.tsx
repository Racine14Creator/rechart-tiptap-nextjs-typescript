import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

export default function BarChartComponent() {
  const userActivity = [
    { date: "2023-01-01", activeUsers: 200 },
    { date: "2023-01-02", activeUsers: 300 },
    { date: "2023-01-03", activeUsers: 400 },
    { date: "2023-01-04", activeUsers: 500 },
    { date: "2023-01-05", activeUsers: 600 },
  ];
  return (
    <div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart width={500} height={300} data={userActivity}>
          <Bar dataKey='activeUsers' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
