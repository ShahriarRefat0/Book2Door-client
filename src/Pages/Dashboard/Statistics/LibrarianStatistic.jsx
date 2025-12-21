import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { FaBookOpen, FaBoxOpen, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';

const LibrarianStatistic = () => {
  // Fetch statistics specific to the logged-in librarian
  const { data: stats, isLoading } = useQuery({
    queryKey: ['librarian-stats'],
    queryFn: async () => {
      const res = await fetch('https://your-api-link.com/librarian-stats?email=user@example.com');
      return res.json();
    },
  });

  if (isLoading) return <div className="p-10 text-center font-semibold">Loading My Library Insights...</div>;

  // Mock data for Book performance (Sales per book)
  const bookPerformanceData = [
    { name: 'JavaScript Ninja', sales: 45 },
    { name: 'React Patterns', sales: 32 },
    { name: 'Node.js Mastery', sales: 28 },
    { name: 'CSS Secrets', sales: 15 },
  ];

  // Data for Order Status distribution
  const orderStatusData = [
    { name: 'Pending', value: 12, color: '#f59e0b' },
    { name: 'Shipped', value: 8, color: '#3b82f6' },
    { name: 'Delivered', value: 25, color: '#10b981' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Librarian Dashboard</h2>
        <p className="text-slate-500">Track your book sales and delivery status</p>
      </header>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <LibCard title="Total Books" value="24" icon={<FaBookOpen />} color="bg-indigo-600" />
        <LibCard title="Active Orders" value="12" icon={<FaHourglassHalf />} color="bg-amber-500" />
        <LibCard title="Total Shipped" value="48" icon={<FaBoxOpen />} color="bg-blue-500" />
        <LibCard title="Success Rate" value="94%" icon={<FaCheckCircle />} color="bg-emerald-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Chart - Takes 2/3 space */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold mb-4 text-slate-700">Top Selling Books</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bookPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="sales" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution - Takes 1/3 space */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold mb-4 text-slate-700">Order Status</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-4 space-y-2">
            {orderStatusData.map((item) => (
              <div key={item.name} className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  {item.name}
                </span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for KPI Cards
const LibCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
    <div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
      <h4 className="text-2xl font-black text-slate-800 mt-1">{value}</h4>
    </div>
    <div className={`${color} text-white p-3 rounded-lg text-xl shadow-lg`}>
      {icon}
    </div>
  </div>
);

export default LibrarianStatistic;

