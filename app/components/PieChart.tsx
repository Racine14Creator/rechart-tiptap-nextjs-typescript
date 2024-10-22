import React from "react";

import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
];

export default function PieChartApp() {
  return (
    <PieChart width={60} height={60}>
      <Pie
        dataKey='Unpaid Notice'
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill='#8884d8'
      />
      <Pie
        dataKey='Paid Notice'
        data={data02}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill='#82ca9d'
      />
      <Tooltip />
    </PieChart>
  );
}
