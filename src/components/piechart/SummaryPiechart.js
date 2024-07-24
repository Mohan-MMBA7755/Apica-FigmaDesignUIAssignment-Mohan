import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SummaryPiechart = () => {

    const data = [
        { name: 'Sep 10', uv: 20000, pv: 80000, amt: 25000 },
        { name: 'Sep 11', uv: 40000, pv: 70000, amt: 45000 },
        { name: 'Sep 12', uv: 60000, pv: 110000, amt: 65000 },
        { name: 'Sep 13', uv: 80000, pv: 24000, amt: 85000 },
        { name: 'Sep 14', uv: 100000, pv: 65000, amt: 105000 },
        { name: 'Sep 15', uv: 120000, pv: 98000, amt: 125000 },
      ];

  return (
    <BarChart
        width={400}
        height={200}
        data={data}
        margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
        }}
        barSize={20}>
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis dataKey="uv"/>
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  )
}

export default SummaryPiechart;