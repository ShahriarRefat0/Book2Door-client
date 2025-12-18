import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/router'
import AuthProvider from './Context/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.documentElement.classList.add("dark");
}

const queryclient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <div>
    <QueryClientProvider client={queryclient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
  </div>
);
