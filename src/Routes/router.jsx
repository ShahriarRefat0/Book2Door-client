import { createBrowserRouter } from "react-router";
import MainLayouts from'../Layouts/MainLayouts'
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayouts";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },

    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }
    ]
  }
]);

export default router;