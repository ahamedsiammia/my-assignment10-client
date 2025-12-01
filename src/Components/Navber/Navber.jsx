import React, { use } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, Logout } = use(AuthContext);

  const hendleLogout = () => {
    Logout()
      .then(() => {
        toast("You have logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar bg-linear-to-r from-[#C800FF] to-[#FF9800] p-4 text-white shadow-lg ">
      <div className="navbar-start">
{/* mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] text-white"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {
              user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/AddCar"
            >
              Add Car
            </NavLink>
          </li>
            }
             {
            user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/MyListings"
            >
              My Listings
            </NavLink>
          </li>
          }
             {
            user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/MyBookings"
            >
              My Booking
            </NavLink>
          </li>
          }
            <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/BrowsCar"
            >
              Brows Car
            </NavLink>
          </li>
            
         
          </ul>
        </div>

        <Link className="btn btn-ghost text-xl">
          <img
            className="w-[50px] h-[50px] rounded-2xl"
            src="https://i.pinimg.com/736x/b9/6d/68/b96d689ea24ffa4a58e7d5f5a1845548.jpg"
            alt=""
          />
          CarSpot
        </Link>
      </div>
{/* computer menu */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          {
              user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/AddCar"
            >
              Add Car
            </NavLink>
          </li>
            }

            {
            user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/MyListings"
            >
              My Listings
            </NavLink>
          </li>
          }

          {
            user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/MyBookings"
            >
              My Booking
            </NavLink>
          </li>
          }
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-2xl text-white"
                  : ""
              }
              to="/BrowsCar"
            >
              Brows Car
            </NavLink>
          </li>
          
          
        </ul>
      </div>

      
      <div className="navbar-end md:gap-5">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer border-2 border-white"
                src={user?.photoURL}
                alt="profile"
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[20] menu p-3 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li className="font-semibold">{user?.displayName}</li>
              <li className="text-sm">{user?.email}</li>
              <hr className="my-2" />
              <li>
                <button
                  onClick={hendleLogout}
                  className="bg-linear-to-r from-[#FF6B00] to-[#FF2D55] text-white px-3 py-2 rounded-xl"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/Login">
              <button className="bg-linear-to-r from-[#FF6B00] to-[#FF2D55] text-white px-5 rounded-xl py-2 font-semibold">
                Log In
              </button>
            </Link>

            <Link to="/Regester">
              <button className="bg-linear-to-r from-[#FF6B00] to-[#FF2D55] text-white px-5 rounded-xl py-2 font-semibold">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navber;


