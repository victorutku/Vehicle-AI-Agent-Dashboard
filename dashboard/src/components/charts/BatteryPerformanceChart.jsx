import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { batteryPerformanceData } from '../../data/vehicleData';

const BatteryPerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={batteryPerformanceData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" domain={[75, 85]} />
        <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="efficiency" 
          fill="#00C49F" 
          name="Efficiency (%)" 
          yAxisId="left"
        />
        <Bar 
          dataKey="degradation" 
          fill="#FF8042" 
          name="Degradation (%)" 
          yAxisId="right"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BatteryPerformanceChart;