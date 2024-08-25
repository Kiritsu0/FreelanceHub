import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
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
  // Destructuring values from the GlobalContext to access global state variables
  const { pageState, darkMode, setDarkMode, profileImage, userName } =
    useContext(GlobalContext);
  
  // Local state variables for controlling dropdown visibility and screen size
  const [showDropdown, setDropdown] = useState(false); // Controls account dropdown visibility
  const [showEvent, setEvent] = useState(false); // Controls job event dropdown visibility
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640); // Determines if the screen is small

  // Refs to detect clicks outside dropdown menus to close them
  const dropdownRef = useRef(null);
  const eventDropdownRef = useRef(null);

  // Effect to handle screen resize and update `isSmallScreen` accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to handle clicks outside of dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close account dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
      // Close job event dropdown if clicked outside
      if (
        eventDropdownRef.current &&
        !eventDropdownRef.current.contains(event.target)
      ) {
        setEvent(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle account dropdown visibility
  const dropdown = () => {
    setDropdown(!showDropdown);
  };

  // Toggle job event dropdown visibility
  const eventDropdown = () => {
    setEvent(!showEvent);
  };

  return (
    <header className="flex justify-between items-center w-screen min-h-14 dark:text-white dark:bg-slate-900 bg-white">
      {/* link to either freelancer or organization page based on pageState */}
      <Link to={pageState === "freelancer" ? "/freelancer" : "/organization"}>
        <h1 className="font-medium ml-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Freelance
          <span className="font-bold dark:text-green-500 text-green-800">
            Hub
          </span>
        </h1>
      </Link>

      <div className="flex items-center gap-5">
        {isSmallScreen ? (
          // For small screens, render a dropdown for jobs
          <div
            onClick={eventDropdown}
            className="group relative flex items-center gap-2 cursor-pointer"
            ref={eventDropdownRef}
          >
            {/* Toggle icons for job dropdown */}
            {showEvent ? (
              <MdOutlineArrowDropUp className="sm:text-3xl" />
            ) : (
              <MdOutlineArrowDropDown className="sm:text-3xl" />
            )}
            <span className="sm:text-2xl">Jobs</span>
            {/* Tooltip for job menu */}
            <span className="hidden group-hover:block absolute w-28 text-center m-auto top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Jobs Menu
            </span>

            {/* Job event dropdown menu */}
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
                  to={pageState === "freelancer" ? "/freelancer/appliedJobs" : "/organization/createdJobs"}
                  className="relative cursor-pointer group overflow-hidden flex gap-2 items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md"
                >
                  <BiSolidBookContent className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl dark:text-green-500 text-green-800" />
                  <h2 className="font-medium">{pageState === "freelancer" ? "Applied Jobs" : "Created Jobs"}</h2>
                </Link>
              </div>
            )}
          </div>
        ) : (
          // For larger screens, render job links inline
          <div className="flex gap-4">
            <Link
              to="/freelancer/savedJobs"
              className="relative text-xl cursor-pointer group overflow-hidden flex gap-2 items-center"
            >
              <IoIosSave className="p-1 cursor-pointer text-2xl md:text-3xl dark:text-green-500 text-green-800" />
              <h2 className="font-medium">Saved Jobs</h2>
            </Link>
            <Link
              to={pageState === "freelancer" ? "/freelancer/appliedJobs" : "/organization/createdJobs"}
              className="relative text-xl cursor-pointer group overflow-hidden flex gap-2 items-center"
            >
              <BiSolidBookContent className="p-1 cursor-pointer text-2xl md:text-3xl dark:text-green-500 text-green-800" />
              <h2 className="font-medium">{pageState === "freelancer" ? "Applied Jobs" : "Created Jobs"}</h2>
            </Link>
          </div>
        )}

        {/* Account dropdown menu */}
        <div className="flex items-center gap-5 mr-8">
          <div
            onClick={dropdown}
            className="bg-green-800 dark:bg-green-500 group relative flex items-center gap-3 border-slate-400 border-2 shadow-md shadow-slate-500 cursor-pointer py-1 px-2 rounded-3xl hover:shadow-xl"
            ref={dropdownRef}
          >
            {/* Profile image or default user icon */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full w-9"
              />
            ) : (
              <FaUser className="bg-gray-200 rounded-full p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
            )}
            {/* Display username */}
            <h1 className="text-white truncate max-w-xs capitalize">{userName}</h1>
            {/* Tooltip for account */}
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Account
            </span>
            {/* Account dropdown menu */}
            {showDropdown && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-900 text-sm w-36 rounded-md">
                <Link
                  to="/"
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
                {/* Toggle dark/light mode */}
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
