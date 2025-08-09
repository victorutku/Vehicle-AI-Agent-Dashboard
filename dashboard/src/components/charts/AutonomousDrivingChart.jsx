import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { autonomousDrivingData } from '../../data/vehicleData';

const AutonomousDrivingChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={autonomousDrivingData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" domain={[80, 100]} />
        <YAxis yAxisId="right" orientation="right" domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="successRate" 
          stroke="#8884d8" 
          fill="#8884d8" 
          fillOpacity={0.3}
          name="Success Rate (%)"
          yAxisId="left"
        />
        <Area 
          type="monotone" 
          dataKey="incidents" 
          stroke="#ff8042" 
          fill="#ff8042" 
          fillOpacity={0.3}
          name="Incidents"
          yAxisId="right"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AutonomousDrivingChart;