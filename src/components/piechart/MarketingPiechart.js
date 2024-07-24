import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const MarketingPiechart = () => {

  const data1 = [{name:"All",value:100}]

  const data2 = [
    {name:"Retention",value:30},
    {name:"Purchase",value:15},
    {name:"Acquisition",value:55}
  ];

  const COLORS = ['#fed28b', '#736ca0', '#5b89d9'];

  return (
        <PieChart width={200} height={200}>
          <Pie data={data1} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="lightblue"></Pie>
          <Pie data={data2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d">
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
        </PieChart>
  )
}

export default MarketingPiechart