import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // Manage main menu state
  const [roomsOpen, setRoomsOpen] = useState(false); // Manage dropdown state for Rooms

  const handleRoomClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    roomType: string
  ) => {
    e.preventDefault();
    navigate(`${roomType}`);
  };
  const handleNavigation = (path: string) => {
    if (location.pathname != "/") {
      navigate(`/${path}`);
    } else {
      window.location.hash = path;
    }
  };
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 md:px-8 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Hamburger Icon for Mobile (Left Aligned) */}
        <div className="flex items-center h-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none md:hidden"
          >
            {!menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          {/* Logo - Always Visible */}
          <div className="text-indigo-500 pl-4 md:pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-200 md:static md:block md:w-auto z-10 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row items-center font-semibold space-y-2 md:space-y-0 md:space-x-6 py-4 md:py-0 px-4 md:px-0">
            <li className="md:px-4 md:py-2 text-indigo-500">
              <a
                href="/"
                className="hover:text-indigo-400 transition-colors duration-300"
                style={{ fontFamily: "Questrial" }}
              >
                Home
              </a>
            </li>
            <li
              className="md:px-4 md:py-2 relative"
              onMouseEnter={() => setRoomsOpen(true)}
              onMouseLeave={() => setRoomsOpen(false)}
            >
              <button
                onClick={() => setRoomsOpen(!roomsOpen)} // Toggle on click for mobile
                className="hover:text-indigo-400 transition-colors duration-300 text-gray-600 flex items-center"
                style={{ fontFamily: "Questrial" }}
              >
                Rooms
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transform transition-transform duration-300 ${
                    roomsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}

              {roomsOpen && (
                <div className="absolute left-0 w-full bg-white shadow-md z-50">
                  <ul className="flex flex-col w-60 md:w-50">
                    {" "}
                    <li>
                      <button
                        onClick={(e) => handleRoomClick(e, "/standard-room")}
                        className="block px-6 py-4 text-gray-700 hover:bg-gray-500 transition-colors duration-300 w-full text-left"
                        style={{
                          backgroundColor: `rgb(229 231 235 / var(--tw-bg-opacity))`,
                          fontFamily: "Questrial",
                        }}
                      >
                        Standard Room
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleRoomClick(e, "/deluxe-room")}
                        className="block px-6 py-4 text-gray-700 hover:bg-gray-800 transition-colors duration-300 w-full text-left"
                        style={{
                          backgroundColor: `rgb(229 231 235 / var(--tw-bg-opacity))`,
                          fontFamily: "Questrial",
                        }}
                      >
                        Deluxe Room
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleRoomClick(e, "/family-suite")}
                        className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-colors duration-300 w-full text-left"
                        style={{
                          backgroundColor: `rgb(229 231 235 / var(--tw-bg-opacity))`,
                          fontFamily: "Questrial",
                        }}
                      >
                        Family Suite
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="md:px-4 md:py-2">
              <button
                onClick={() => handleNavigation("#contact")}
                className="hover:text-indigo-400 transition-colors duration-300"
                style={{ fontFamily: "Questrial" }}
              >
                Contact Us
              </button>
            </li>
            <li className="md:px-4 md:py-2">
              <button
                onClick={() => handleNavigation("#about")}
                className="hover:text-indigo-400 transition-colors duration-300"
                style={{ fontFamily: "Questrial" }}
              >
                About Us
              </button>
            </li>
            <li className="md:px-4 md:py-2">
              <button
                style={{ fontFamily: "Questrial" }}
                onClick={() => handleNavigation("#gallery")}
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Gallery
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
