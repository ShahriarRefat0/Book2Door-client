import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUsers, FaBook, FaDollarSign, FaTruck } from 'react-icons/fa';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import ErrorPage from '../../Error/ErrorPage';

const AdminStatistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading, isError } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-statistics');
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  const chartData = [
    { name: 'Mon', revenue: 4000 },
    { name: 'Tue', revenue: 3000 },
    { name: 'Wed', revenue: 5000 },
    { name: 'Thu', revenue: 2780 },
    { name: 'Fri', revenue: 1890 },
    { name: 'Sat', revenue: 2390 },
    { name: 'Sun', revenue: 3490 },
  ];

  return (
    <div className="p-6 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">System Overview</h2>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Revenue" value={`$${stats?.totalRevenue || 0}`} icon={<FaDollarSign />} color="bg-green-500" />
        <StatCard title="Total Users" value={stats?.totalUsers || 0} icon={<FaUsers />} color="bg-blue-500" />
        <StatCard title="Total Books" value={stats?.totalBooks || 0} icon={<FaBook />} color="bg-purple-500" />
        <StatCard title="Pending Orders" value={stats?.totalPendingOrders || 0} icon={<FaTruck />} color="bg-orange-500" />
      </div>

      {/* Chart Section */}
      <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
        <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-slate-200">Revenue Flow (Last 7 Days)</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* Conditional grid color for dark mode */}
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" opacity={0.1} />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  borderRadius: '12px',
                  border: 'none',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
                  color: '#f8fafc'
                }}
                itemStyle={{ color: '#8b5cf6' }}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorRev)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Reusable Sub-component for Cards
const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-5 transition-all hover:scale-[1.02] hover:shadow-md">
    <div className={`${color} p-4 rounded-xl text-white text-2xl shadow-lg`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default AdminStatistics;