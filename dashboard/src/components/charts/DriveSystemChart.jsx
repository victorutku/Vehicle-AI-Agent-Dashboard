import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { driveSystemData } from '../../data/vehicleData';

const DriveSystemChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={driveSystemData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        layout="vertical"
        stackOffset="expand"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="name" type="category" />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Bar dataKey="electric" name="Electric Power (%)" fill="#0088FE" stackId="a" />
        <Bar dataKey="hybrid" name="Hybrid Power (%)" fill="#FFBB28" stackId="a" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DriveSystemChart;