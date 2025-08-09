import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { batteryHealthData } from '../../data/vehicleData';

const BatteryHealthBubbleChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis 
          type="number" 
          dataKey="cycles" 
          name="Charge Cycles" 
          domain={[0, 250]}
          label={{ value: 'Charge Cycles', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          type="number" 
          dataKey="temp" 
          name="Temperature (°C)"
          domain={[25, 45]}
          label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }}
        />
        <ZAxis 
          type="number" 
          dataKey="value" 
          range={[60, 400]} 
          name="Health %"
        />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => {
            if (name === 'Health %') return [`${value}%`, name];
            return [value, name];
          }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-white p-2 border border-gray-200 shadow-sm rounded">
                  <p className="font-medium">{data.name}</p>
                  <p>Health: {data.value}%</p>
                  <p>Cycles: {data.cycles}</p>
                  <p>Temp: {data.temp}°C</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Scatter name="Battery Cells" data={batteryHealthData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BatteryHealthBubbleChart;