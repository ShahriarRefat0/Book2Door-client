import { createBrowserRouter } from "react-router";
import MainLayouts from'../Layouts/MainLayouts'
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayouts";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import BookDetails from "../Pages/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,       
      },
      {
        path: '/book-details',
        element: <BookDetails></BookDetails>
      }
    ],
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