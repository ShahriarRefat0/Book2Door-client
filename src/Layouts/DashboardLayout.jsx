import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AiFillProduct } from "react-icons/ai";
import { FaRegCreditCard, FaTasks, FaUsers } from "react-icons/fa";
import { RiMotorbikeFill } from 'react-icons/ri';
import { MdLibraryBooks, MdManageAccounts } from "react-icons/md";
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import { SiGoogletasks } from "react-icons/si";
import { IoPersonCircle } from 'react-icons/io5';
import Logo from '../Components/Logo/Logo';
import { IoIosBookmarks } from "react-icons/io";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { IoLogOut } from "react-icons/io5";
import useRole from '../hook/useRole';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';



const DashboardLayout = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
const [role, isRoleLoading] = useRole()

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Signed Out",
          icon: "success",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  if(isRoleLoading) return <LoadingSpinner></LoadingSpinner>

  return (
    <div>
      <div className="drawer lg:drawer-open  mx-auto">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4"><span className='text-primary font-bold'>Book2Door</span> Dashboard</div>
          </nav>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

            {/* 🔹 Menu */}
            <ul className="menu w-full flex-1">
              {/* List item */}
              <li>
                <Link
                  to="/"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
              </li>

              {/* //our dashboard links */}

              {role === 'customer' && 
                <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Orders"
                    to={"/dashboard/my-order"}
                  >
                    <AiFillProduct />
                    <span className="is-drawer-close:hidden">My Orders</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Profile"
                    to={"/dashboard/my-profile"}
                  >
                    <IoPersonCircle />
                    <span className="is-drawer-close:hidden">My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Payment History"
                    to={"/dashboard/payment-history"}
                  >
                    <FaRegCreditCard />
                    <span className="is-drawer-close:hidden">Payment History</span>
                  </NavLink>
                </li>
                </>
        
              
              }
              {role === 'admin' &&
                <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Profile"
                    to={"/dashboard/my-profile"}
                  >
                    <IoPersonCircle />
                    <span className="is-drawer-close:hidden">My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All Users"
                    to={"/dashboard/all-users"}
                  >
                    <FaUsers />
                    <span className="is-drawer-close:hidden">All Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Books"
                    to={"/dashboard/manage-books"}
                  >
                    <MdLibraryBooks />
                    <span className="is-drawer-close:hidden">Manage Books</span>
                  </NavLink>
                </li>
             
              </>
              
              }
              {
                role === 'librarian' && 
                <>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Books"
                    to={"/dashboard/add-books"}
                  >
                    <BiSolidBookAdd />
                    <span className="is-drawer-close:hidden">Add Books</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Books"
                    to={"/dashboard/my-books"}
                  >
                    <IoIosBookmarks />
                    <span className="is-drawer-close:hidden">My Books</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Orders"
                    to={"/dashboard/orders"}
                  >
                    <TbTruckDelivery />
                    <span className="is-drawer-close:hidden">Orders</span>
                  </NavLink>
                </li>
                </>
              }

      
             
            


              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  <span className="is-drawer-close:hidden">Settings</span>
                </button>
              </li>
            </ul>
            <div className="w-full p-3 border-t border-base-300 mt-auto">
              <button
                onClick={handleSignOut}
                className="
      btn btn-outline btn-primary
      w-full
      flex items-center
      gap-2
      is-drawer-close:justify-center
      is-drawer-open:justify-start
    "
              >
                <IoLogOut className="text-xl shrink-0" />
                <span className="is-drawer-close:hidden">Sign Out</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;