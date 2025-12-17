import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuth from '../../hook/useAuth';
import Logo from '../Logo/Logo';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user,
    signOutUser, } = useAuth()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')
  const navigate = useNavigate()


  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All Books
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard/my-order">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark"); // DaisyUI
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light"); // DaisyUI
    }

    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light")
  }

  const handleSignOut = () => {
    signOutUser()
      .then((e) => {
        Swal.fire({
          title: "SignOUt Successful",
          icon: "success",
        });
        navigate('/')
      })
      .catch((e) => {
        console.log(e.message)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
  }





  return (
    <div>
      <div className="navbar bg-[#EEEEEE] dark:bg-[#1E2939] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl text-primary "><Logo></Logo>Book2Door</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">


          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => handleTheme(e.target.checked)}
            />


            <svg
              className="swap-off w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            <svg
              className="swap-on w-6 h-6 text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </label>



          {user ? (
            <>
              {/* Avatar Dropdown */}
              <div className="dropdown dropdown-end pr-4">
                <label tabIndex={0} className="cursor-pointer">
                  <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg w-48 mt-3 p-3"
                >
                  <li className="text-center font-semibold border-b pb-2 mb-2">
                    {user.displayName || "User"}
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-sm btn-error text-white w-full"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            /* 🔐 Auth Buttons */
            <div className="flex items-center gap-2">
              <Link to="/login" className="btn-outline bg-white hover:bg-gray-300 text-primary btn btn-sm ">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-sm btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;