import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import axios from "axios";
import logo from '../../../images/logo.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://4wheelanes-server.vercel.app/users?email=${user?.email}`)
      .then(function (response) {
        setUserData(response.data);
        setLoading(false);
      });
  }, [user?.email]);

  const menuItems = (
    <ul className="flex flex-col bg-base-100 rounded-box lg:flex-row text-white lg:items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="h-14 p-0 m-0">
        {user?.uid && (
          <ul
            tabIndex={0}
            className="menu menu-compact menu-horizontal dropdown-content p-2"
          >
            <li tabIndex={0}>
              <Link className="">
                Dashboard
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="bg-base-200 rounded-b-xl p-3">
                {userData?.role === "Seller" && (
                  <>
                    <li>
                      <Link to="/dashboard/sellCar">Sell A Car</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myProducts">My Products</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/mybuyers">My Buyers</Link>
                    </li>
                  </>
                )}
                {userData?.role === "Buyer/User" && (
                  <>
                    <li>
                      <Link to="/dashboard/myorders">My Orders</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myProducts">My Wishlist</Link>
                    </li>
                  </>
                )}
                {userData?.role === "Admin" && (
                  <>
                    <li>
                      <Link to="/dashboard/allseller">All Seller</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allbuyer">All Buyer</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/alluser">All User</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/reportedItems">Reported Items</Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.clear();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-primary relative z-10">
      <div className="navbar rounded-b-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52"
            >
              {menuItems}
            </div>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-white text-2xl"
          >
            <img className="w-10 mr-3 hidden lg:flex md:flex" src={logo} alt=""></img>
            Wheelanes
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid || user?.photoURL ? (
            <>
              <img
                src={user?.photoURL}
                alt=""
                className="lg:flex hidden border border-gray-300 w-14 mask mask-hexagon mr-4"
              ></img>
              <Link onClick={handleLogOut} className="btn">
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
