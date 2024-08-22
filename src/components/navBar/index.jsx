import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context";

// Icons
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoIosSave } from "react-icons/io";
import { BiSolidBookContent } from "react-icons/bi";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdDarkMode,
  MdLightMode,
  MdSettings,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  // Variables
  const { volunteerPage, darkMode, setDarkMode } = useContext(GlobalContext);
  const [showDropdown, setDropdown] = useState(false);
  const [showEvent, setEvent] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const location = useLocation();

  // Refs for dropdown menus
  const dropdownRef = useRef(null);
  const eventDropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
      if (
        eventDropdownRef.current &&
        !eventDropdownRef.current.contains(event.target)
      ) {
        setEvent(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dropdown
  const dropdown = () => {
    setDropdown(!showDropdown);
  };

  // Event Dropdown
  const eventDropdown = () => {
    setEvent(!showEvent);
  };

  return (
    <header className="flex justify-between items-center w-screen min-h-14 dark:text-white dark:bg-slate-900 bg-white">
      <Link to={volunteerPage ? "/freelancer" : "/organization"}>
        <h1 className="font-medium ml-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Freelance<span className="font-bold dark:text-green-500 text-green-800">Hub</span>
        </h1>
      </Link>

      <div className="flex items-center gap-5">
        {location.pathname === "/" ? (
          <Link to="" className="relative cursor-pointer group overflow-hidden">
            <h2 className="font-medium mb-2 sm:text-1xl md:text-1xl lg:text-2xl">
              Applied Jobs
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-800 transition-transform transform translate-x-60 group-hover:translate-x-0"></div>
          </Link>
        ) : isSmallScreen ? (
          <div
            onClick={eventDropdown}
            className="group relative flex items-center gap-2 cursor-pointer"
            ref={eventDropdownRef}
          >
            {showEvent ? (
              <MdOutlineArrowDropUp className="sm:text-3xl" />
            ) : (
              <MdOutlineArrowDropDown className="sm:text-3xl" />
            )}
            <span className="sm:text-2xl">Jobs</span>
            <span className="hidden group-hover:block absolute w-28 text-center m-auto top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Jobs Menu
            </span>

            {showEvent && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 dark:bg-slate-900 bg-white text-sm w-40 rounded-md">
                <Link
                  to="/freelancer/savedJobs"
                  className="relative cursor-pointer group overflow-hidden flex gap-2 items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-t-md"
                >
                  <IoIosSave className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  <h2 className="font-medium">Saved Jobs</h2>
                </Link>
                <Link
                  to="/freelancer/appliedJobs"
                  className="relative cursor-pointer group overflow-hidden flex gap-2 items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md"
                >
                  <BiSolidBookContent className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  <h2 className="font-medium">Applied Jobs</h2>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/freelancer/savedJobs"
              className="relative text-xl cursor-pointer group overflow-hidden flex gap-2 items-center"
            >
              <IoIosSave className="p-1 cursor-pointer text-2xl md:text-3xl dark:text-green-500 text-green-800" />
              <h2 className="font-medium">Saved Jobs</h2>
            </Link>
            <Link
              to="/freelancer/appliedJobs"
              className="relative text-xl cursor-pointer group overflow-hidden flex gap-2 items-center"
            >
              <BiSolidBookContent className="p-1 cursor-pointer text-2xl md:text-3xl dark:text-green-500 text-green-800" />
              <h2 className="font-medium">Applied Jobs</h2>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-5 mr-8">
          <div
            onClick={dropdown}
            className="bg-green-800 dark:bg-green-500 group relative flex items-center gap-3 border-slate-400 border-2 shadow-md shadow-slate-500 cursor-pointer py-1 px-2 rounded-3xl hover:shadow-xl"
            ref={dropdownRef}
          >
            <FaUser className="bg-gray-200 rounded-full p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
            <h4 className="text-white">Guest</h4>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Account
            </span>
            {showDropdown && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-900 text-sm w-36 rounded-md">
                <Link
                  to=""
                  className="flex gap-2 items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-t-md"
                >
                  <CiLogout className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  Logout
                </Link>
                <hr />
                <Link
                  to={""}
                  className="flex gap-2 items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <MdSettings className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  Settings
                </Link>
                <hr />
                <Link
                  to={"/profile"}
                  className="flex gap-2 items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <CgProfile className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  Profile
                </Link>
                <hr />
                <div
                  className="flex gap-2 items-center p-2 rounded-b-md hover:bg-slate-200 dark:hover:bg-slate-700"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? (
                    <MdLightMode className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  ) : (
                    <MdDarkMode className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  )}
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
