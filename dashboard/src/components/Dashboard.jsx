import React from 'react';
import AutonomousDrivingChart from './charts/AutonomousDrivingChart';
import BatteryPerformanceChart from './charts/BatteryPerformanceChart';
import DriveSystemChart from './charts/DriveSystemChart';
import DecisionSystemChart from './charts/DecisionSystemChart';
import VehiclePerformanceRadarChart from './charts/VehiclePerformanceRadarChart';
import DriveSystemTreeMap from './charts/DriveSystemTreeMap';
import BatteryHealthBubbleChart from './charts/BatteryHealthBubbleChart';
import StatsCard from './StatsCard';
import { vehicleStats } from '../data/vehicleData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Vehicle AI Agent Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicleStats.map((stat, index) => (
          <StatsCard 
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>
      
      {/* Charts - First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Autonomous Driving Performance</h2>
          <AutonomousDrivingChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Battery Performance</h2>
          <BatteryPerformanceChart />
        </div>
      </div>
      
      {/* Charts - Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Drive System Power Distribution</h2>
          <DriveSystemChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Decision System Accuracy</h2>
          <DecisionSystemChart />
        </div>
      </div>
      
      {/* Charts - Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Vehicle Performance Metrics</h2>
          <VehiclePerformanceRadarChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Drive System Components</h2>
          <DriveSystemTreeMap />
        </div>
      </div>
      
      {/* Battery Health Bubble Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Battery Cell Health Analysis</h2>
        <BatteryHealthBubbleChart />
      </div>
    </div>
  );
};

export default Dashboard;