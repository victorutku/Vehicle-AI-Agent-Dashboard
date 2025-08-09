import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { decisionSystemData, COLORS } from '../../data/vehicleData';

const DecisionSystemChart = () => {
  const total = decisionSystemData.reduce((sum, item) => sum + item.accuracy, 0);
  const average = (total / decisionSystemData.length).toFixed(2);
  
  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-2 text-gray-600 text-sm">Average Accuracy: {average}%</div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={decisionSystemData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="accuracy"
            nameKey="name"
            label={({ name, accuracy }) => `${name}: ${accuracy}%`}
          >
            {decisionSystemData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DecisionSystemChart;