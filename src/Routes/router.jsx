import { createBrowserRouter } from "react-router";
import MainLayouts from'../Layouts/MainLayouts'
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayouts";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import BookDetails from "../Pages/BookDetails/BookDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddBooks from "../Pages/Dashboard/AddBooks/AddBooks";
import MyBooks from "../Pages/Dashboard/MYBooks/MyBooks";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageBooks from "../Pages/Dashboard/ManageBooks/ManageBooks";
import LibrarianOrders from "../Pages/Dashboard/LibrarianOrders/LibrarianOrders";
import AllBooks from "../Pages/Home/AllBooks";
import PaymentSuccess from "../Pages/Home/Payment/PaymentSuccess";


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
      },
      {
        path: '/all-books',
        element: <AllBooks></AllBooks>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>
      },
      {
        path: '/payment-success',
        element: <PaymentSuccess></PaymentSuccess>
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
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/my-order',
        element: <MyOrder></MyOrder>
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/my-profile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/dashboard/add-books',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/dashboard/my-books',
        element: <MyBooks></MyBooks>
      },
      {
        path: '/dashboard/all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/manage-books',
        element: <ManageBooks></ManageBooks>
      },
      {
        path: '/dashboard/orders',
        element: <LibrarianOrders></LibrarianOrders>
      },
    ]
  }
]);


export default router;