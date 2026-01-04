import React, { use, useEffect, useState } from "react";
import { BiSolidBookmark } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { TbHomeFilled } from "react-icons/tb";
import { RiAddBoxFill } from "react-icons/ri";
import { FaCar, FaListAlt } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navber = () => {
  const { user, Logout } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

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
    <div className=" shadow-sm ">
      <nav className="navbar   container mx-auto">
      <div className="navbar-start ">
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

        <div className=" text-xl">
         <span className="text-3xl font-extrabold text-[#FF6B00]">Car</span>
        Spot
        </div>
      </div>
{/* computer menu */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-lg text-white"
                  : ""
              }
              to="/"
            >
              <TbHomeFilled />

              Home
            </NavLink>
          </li>

          {
              user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-lg text-white"
                  : ""
              }
              to="/AddCar"
            >
              <RiAddBoxFill />

              Add Car
            </NavLink>
          </li>
            }

            {
            user && <li>
            <NavLink
            
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-lg text-white"
                  : ""
              }
              
              to="/MyListings"
            >
              
              <FaListAlt />
              My Listings
            </NavLink>
          </li>
          }

          {
            user && <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-lg text-white"
                  : ""
              }
              to="/MyBookings"
            >
              <BiSolidBookmark />

              My Booking
            </NavLink>
          </li>
          }
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-linear-to-r from-[#FF6B00] to-[#FF2D55] rounded-lg text-white"
                  : ""
              }
              to="/BrowsCar"
            >
              <FaCar />
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

               <div className="flex items-center gap-2">
                                        <span >
                                            <MdOutlineLightMode size={24} />
                                        </span>
                                        <input
                                            onChange={(e) => handleTheme(e.target.checked)}
                                            type="checkbox"
                                            defaultChecked={localStorage.getItem('theme') === "dark"}
                                            className="toggle"
                                        />
                                        <span>
                                            <MdDarkMode size={24} />
                                        </span>
                                    </div>
              <li className="font-semibold">{user?.displayName}</li>
              <li className="text-sm">{user?.email}</li>
              <NavLink to="/dashboard" className="bg-linear-to-r from-[#FF6B00] to-[#FF2D55] text-white px-3 py-2 rounded-xl">Dashboard</NavLink>
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
    </div>
  );
};

export default Navber;


