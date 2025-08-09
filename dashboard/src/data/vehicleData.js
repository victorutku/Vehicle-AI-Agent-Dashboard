// Vehicle data for AI agent dashboard

// Autonomous Driving Data
export const autonomousDrivingData = [
  { name: 'Jan', successRate: 92, incidents: 2 },
  { name: 'Feb', successRate: 94, incidents: 1 },
  { name: 'Mar', successRate: 93, incidents: 2 },
  { name: 'Apr', successRate: 95, incidents: 1 },
  { name: 'May', successRate: 96, incidents: 0 },
  { name: 'Jun', successRate: 97, incidents: 0 },
  { name: 'Jul', successRate: 98, incidents: 0 },
  { name: 'Aug', successRate: 99, incidents: 0 },
  { name: 'Sep', successRate: 98, incidents: 1 },
  { name: 'Oct', successRate: 99, incidents: 0 },
  { name: 'Nov', successRate: 100, incidents: 0 },
  { name: 'Dec', successRate: 99, incidents: 0 },
];

// Battery Performance Data
export const batteryPerformanceData = [
  { name: 'Jan', efficiency: 80, degradation: 1 },
  { name: 'Feb', efficiency: 79, degradation: 2 },
  { name: 'Mar', efficiency: 81, degradation: 1 },
  { name: 'Apr', efficiency: 82, degradation: 0 },
  { name: 'May', efficiency: 81, degradation: 1 },
  { name: 'Jun', efficiency: 83, degradation: 0 },
];

// Drive System Data
export const driveSystemData = [
  { name: 'Urban', electric: 90, hybrid: 10 },
  { name: 'Highway', electric: 70, hybrid: 30 },
  { name: 'Off-road', electric: 40, hybrid: 60 },
  { name: 'Mountain', electric: 30, hybrid: 70 },
  { name: 'Performance', electric: 95, hybrid: 5 },
  { name: 'Economy', electric: 100, hybrid: 0 },
];

// Decision System Data
export const decisionSystemData = [
  { name: 'Traffic Signs', accuracy: 99.8 },
  { name: 'Pedestrians', accuracy: 99.5 },
  { name: 'Other Vehicles', accuracy: 99.6 },
  { name: 'Lane Changes', accuracy: 99.4 },
  { name: 'Weather Conditions', accuracy: 98.7 },
];

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Performance Metrics
export const performanceMetricsData = [
  { subject: 'Speed', current: 95, target: 100 },
  { subject: 'Safety', current: 98, target: 100 },
  { subject: 'Efficiency', current: 92, target: 95 },
  { subject: 'Comfort', current: 90, target: 93 },
  { subject: 'Range', current: 85, target: 95 },
  { subject: 'Reliability', current: 94, target: 97 },
];

// Battery Health Data for Bubble Chart
export const batteryHealthData = [
  { name: 'Cell A', value: 95, cycles: 120, temp: 35 },
  { name: 'Cell B', value: 92, cycles: 150, temp: 38 },
  { name: 'Cell C', value: 98, cycles: 80, temp: 32 },
  { name: 'Cell D', value: 90, cycles: 200, temp: 40 },
  { name: 'Cell E', value: 96, cycles: 100, temp: 34 },
];

// Drive System Components for TreeMap
export const driveSystemComponents = [
  {
    name: 'Motor',
    children: [
      { name: 'Front Motor', size: 2000, status: 'optimal' },
      { name: 'Rear Motor', size: 2500, status: 'optimal' },
    ],
  },
  {
    name: 'Battery',
    children: [
      { name: 'Main Pack', size: 4000, status: 'optimal' },
      { name: 'Auxiliary', size: 1000, status: 'optimal' },
    ],
  },
  {
    name: 'Controller',
    children: [
      { name: 'Power Inverter', size: 1800, status: 'optimal' },
      { name: 'ECU', size: 1200, status: 'optimal' },
    ],
  },
];

// Stats Cards Data
export const vehicleStats = [
  {
    title: 'Autonomous Miles',
    value: '12,385',
    change: '+14.5%',
    trend: 'up',
    icon: {
      path: 'M13 10V3L4 14h7v7l9-11h-7z',
      bgColor: 'bg-indigo-500'
    }
  },
  {
    title: 'Battery Health',
    value: '96.2%',
    change: '-0.4%',
    trend: 'down',
    icon: {
      path: 'M13 10V3L4 14h7v7l9-11h-7z',
      bgColor: 'bg-green-500'
    }
  },
  {
    title: 'System Uptime',
    value: '99.8%',
    change: '+0.3%',
    trend: 'up',
    icon: {
      path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-blue-500'
    }
  },
  {
    title: 'Energy Efficiency',
    value: '92.7%',
    change: '+1.2%',
    trend: 'up',
    icon: {
      path: 'M13 10V3L4 14h7v7l9-11h-7z',
      bgColor: 'bg-purple-500'
    }
  }
];