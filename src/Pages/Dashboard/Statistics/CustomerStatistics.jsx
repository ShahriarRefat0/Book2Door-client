import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FaBook, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';

const CustomerStatistics = () => {
  // Replace with your actual API endpoint and user context
  const { data: stats, isLoading } = useQuery({
    queryKey: ['user-stats'],
    queryFn: async () => {
      const res = await fetch('https://your-api-link.com/user-stats?email=user@example.com');
      return res.json();
    },
  });

  //if (isLoading) return <div className="p-10 text-center dark:text-white">Loading your library stats...</div>;

  // Mock data: Monthly spending or books borrowed
  const activityData = [
    { month: 'Jan', books: 2 },
    { month: 'Feb', books: 5 },
    { month: 'Mar', books: 3 },
    { month: 'Apr', books: 8 },
    { month: 'May', books: 6 },
  ];

  // Distribution of genres/categories read
  const categoryData = [
    { name: 'Fiction', value: 40, color: '#6366f1' },
    { name: 'Tech', value: 30, color: '#10b981' },
    { name: 'Science', value: 20, color: '#f59e0b' },
    { name: 'History', value: 10, color: '#ef4444' },
  ];

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">My Reading Activity</h2>
        <p className="text-slate-500 dark:text-slate-400">Track your books, reviews, and library spending</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <UserCard title="Books Borrowed" value="18" icon={<FaBook />} color="bg-blue-500" />
        <UserCard title="Active Orders" value="02" icon={<FaShoppingCart />} color="bg-emerald-500" />
        <UserCard title="Total Spent" value="$142" icon={<FaWallet />} color="bg-violet-500" />
        <UserCard title="Reviews Given" value="12" icon={<FaStar />} color="bg-amber-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reading Trend Line Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6 text-slate-700 dark:text-slate-200">Monthly Reading Habit</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} axisLine={false} />
                <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Line type="monotone" dataKey="books" stroke="#6366f1" strokeWidth={4} dot={{ r: 6, fill: '#6366f1' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Pie Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6 text-slate-700 dark:text-slate-200">Book Categories</h3>
          <div className="h-64 flex flex-col md:flex-row items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} innerRadius={60} outerRadius={80} dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-full md:w-48 space-y-2 mt-4 md:mt-0">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="dark:text-slate-400">{item.name}</span>
                  </div>
                  <span className="font-bold dark:text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserCard = ({ title, value, icon, color }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 transition-all hover:shadow-md">
    <div className={`${color} text-white p-4 rounded-xl text-xl`}>
      {icon}
    </div>
    <div>
      <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
      <h4 className="text-2xl font-bold text-slate-800 dark:text-white">{value}</h4>
    </div>
  </div>
);


export default CustomerStatistics;