import { createBrowserRouter } from "react-router";
import MainLayouts from '../Layouts/MainLayouts'
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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageBooks from "../Pages/Dashboard/ManageBooks/ManageBooks";
import LibrarianOrders from "../Pages/Dashboard/LibrarianOrders/LibrarianOrders";
import AllBooks from "../Pages/Home/AllBooks";
import PaymentSuccess from "../Pages/Home/Payment/PaymentSuccess";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import LibrarianRoute from "./LibrarianRoute";
import CustomerRoute from "./CustomerRoute";
import AdminStatistics from "../Pages/Dashboard/Statistics/AdminStatistics";
import LibrarianStatistic from "../Pages/Dashboard/Statistics/LibrarianStatistic";
import CustomerStatistics from "../Pages/Dashboard/Statistics/CustomerStatistics";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyBooks from "../Pages/Dashboard/MYAllBooks/MyBooks";
import EditBookInfo from "../Pages/Dashboard/MYAllBooks/UpdateBookInfo/EditBookInfo";
import AboutUs from "../Pages/AboutUs/AboutUs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
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
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      //statistic base role
      {
        path: '/dashboard/admin-statistic',
        element: <PrivateRoute>
          <AdminRoute>
            <AdminStatistics></AdminStatistics>
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/librarian-statistic',
        element: <PrivateRoute>
          <LibrarianRoute>
            <LibrarianStatistic></LibrarianStatistic>
          </LibrarianRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/customer-statistic',
        element: <PrivateRoute>
          <CustomerRoute>
            <CustomerStatistics></CustomerStatistics>
          </CustomerRoute>
        </PrivateRoute>
      },
      //customer route
      {
        path: '/dashboard/my-profile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path: '/dashboard/my-order',
        element: <PrivateRoute>
          <CustomerRoute>
            <MyOrder></MyOrder>
          </CustomerRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/payment-history',
        element: <PrivateRoute>
          <CustomerRoute>
            <PaymentHistory></PaymentHistory>
          </CustomerRoute>
        </PrivateRoute>
      },

      //librarian routes
      {
        path: '/dashboard/edit-book-info/:id',
        element: <PrivateRoute>
          <LibrarianRoute>
            <EditBookInfo></EditBookInfo>
          </LibrarianRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/add-books',
        element: <PrivateRoute>
          <LibrarianRoute>
            <AddBooks></AddBooks>
          </LibrarianRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/my-books',
        element: <PrivateRoute>
          <LibrarianRoute>
            <MyBooks></MyBooks>
          </LibrarianRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/orders',
        element: <PrivateRoute>
          <LibrarianRoute>
            <LibrarianOrders></LibrarianOrders>
          </LibrarianRoute>
        </PrivateRoute>
      },
      //admin routes
      {
        path: '/dashboard/all-users',
        element: <PrivateRoute>
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: '/dashboard/manage-books',
        element: <PrivateRoute>
          <AdminRoute>
            <ManageBooks></ManageBooks>
          </AdminRoute>
        </PrivateRoute>
      },

    ]
  }
]);


export default router;