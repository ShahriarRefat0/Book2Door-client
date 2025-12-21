import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { FaBookOpen, FaBoxOpen, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const LibrarianStatistic = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading, isError } = useQuery({
    queryKey: ['librarian-stats'], // Changed to a more specific key
    queryFn: async () => {
      const res = await axiosSecure.get('/librarian-statistics');
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center dark:bg-slate-950">
        <p className="text-red-500 font-bold text-xl uppercase tracking-widest">Error fetching statistics...</p>
      </div>
    );
  }

  // Integration: Data for Order Status distribution (Dynamic from your stats)
  const orderStatusData = [
    { name: 'Pending', value: stats?.pendingOrders || 0, color: '#f59e0b' },
    { name: 'Shipped', value: stats?.shippedOrders || 0, color: '#3b82f6' },
    { name: 'Delivered', value: stats?.deliveredOrders || 0, color: '#10b981' },
  ];

  // Placeholder for Book performance (Ideally fetch this from backend too)
  const bookPerformanceData = [
    { name: 'JavaScript Ninja', sales: 45 },
    { name: 'React Patterns', sales: 32 },
    { name: 'Node.js Mastery', sales: 28 },
    { name: 'CSS Secrets', sales: 15 },
  ];

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Librarian Dashboard</h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Track your book sales and delivery status</p>
      </header>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <LibCard title="Total Books" value={stats?.totalBooks || 0} icon={<FaBookOpen />} color="bg-indigo-600" />
        <LibCard title="Total Orders" value={stats?.totalOrders || 0} icon={<FaHourglassHalf />} color="bg-amber-500" />
        <LibCard title="Total Shipped" value={stats?.shippedOrders || 0} icon={<FaBoxOpen />} color="bg-blue-500" />
        <LibCard title="Total Revenue" value={`$${stats?.totalRevenue || 0}`} icon={<FaCheckCircle />} color="bg-emerald-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Chart - Takes 2/3 space */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Top Selling Books</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Bar dataKey="sales" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution - Takes 1/3 space */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Order Status</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  innerRadius={65}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-6 space-y-3">
            {orderStatusData.map((item) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-3 font-medium text-slate-600 dark:text-slate-400">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  {item.name}
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-100">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for KPI Cards with Dark Mode Support
const LibCard = ({ title, value, icon, color }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm transition-all hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-600">
    <div>
      <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
      <h4 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{value}</h4>
    </div>
    <div className={`${color} text-white p-4 rounded-xl text-xl shadow-xl shadow-indigo-500/10`}>
      {icon}
    </div>
  </div>
);

export default LibrarianStatistic;