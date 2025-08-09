import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { driveSystemComponents, COLORS } from '../../data/vehicleData';

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, colors, name, status, size } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor(index / 2) % colors.length] : 'rgba(0,0,0,0)',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
        >
          {name}
        </text>
      )}
      {depth === 2 && (
        <>
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={12}
            fillOpacity={0.9}
          >
            {name}
          </text>
          <text
            x={x + 4}
            y={y + 35}
            fill="#fff"
            fontSize={10}
            fillOpacity={0.7}
          >
            {status}
          </text>
        </>
      )}
    </g>
  );
};

const DriveSystemTreeMap = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <Treemap
        data={driveSystemComponents}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent colors={COLORS} />}
      >
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-white p-2 border border-gray-200 shadow-sm rounded">
                  <p className="font-medium">{data.name}</p>
                  <p>Status: {data.status}</p>
                  <p>Health Index: {data.size}</p>
                </div>
              );
            }
            return null;
          }}
        />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default DriveSystemTreeMap;