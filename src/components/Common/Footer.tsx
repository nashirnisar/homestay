import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== "/") {
      navigate(`/${path}`);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm">
        {/* Left Side: Logo and About */}
        <div className="space-y-4">
          <div className="font-bold text-lg mt-10">
            <p> © The City Stay Hotel</p>
          </div>
        </div>

        {/* Middle Section: About */}
        <div className="space-y-4">
          <h4 className="font-bold">ABOUT</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation("#about")}
                className="hover:text-blue-500"
              >
                The City Stay Hotel
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("#contact")}
                className="hover:text-blue-500"
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("#gallery")}
                className="hover:text-blue-500"
              >
                Gallery
              </button>
            </li>
          </ul>
        </div>

        {/* Middle Section: Hotel Rooms */}
        <div className="space-y-4">
          <h4 className="font-bold">HOTEL ROOMS</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate("/standard-room")}
                className="hover:text-blue-500"
              >
                Standard Room
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/deluxe-room")}
                className="hover:text-blue-500"
              >
                Deluxe Room
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/family-suite")}
                className="hover:text-blue-500"
              >
                Family Suite Room
              </button>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Details */}
        <div className="space-y-4">
          <h4 className="font-bold">CONTACT DETAILS</h4>
          <p>
            The City Stay Hotel, NH 1, Ram Munshi Bagh, Sonwar Bagh, Srinagar
          </p>
          <p>(+) 9906172993</p>
          <p>dawoodali123@gmail.com</p>
          <p>Mon - Sun, 9:00 AM - 9:00 PM</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600">
        <p className="text-xs">
          All Rights Reserved © {new Date().getFullYear()} TheCityStayHotel
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            className="text-xs"
            href="https://www.linkedin.com/in/nashir-nisar-0061282a1/"
          >
            Developed By @ Nashir Khan
          </a>
        </div>
      </div>
    </footer>
  );
};
