import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBed,
  FaTv,
  FaPhone,
  FaWifi,
  FaTemperatureHigh,
  FaCoffee,
  FaWind,
  FaBath,
} from "react-icons/fa";
import { MdIron } from "react-icons/md";
import { Button, EnquiryPortal } from "../../components/Common";

export const FamilySuite: React.FC = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const handleOpenPortal = () => {
    setIsPortalOpen(true);
  };

  const handleClosePortal = () => {
    setIsPortalOpen(false);
  };
  const images = [
    "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior3-e1464286239555.jpg",
    "https://amorgoshotel.com/wp-content/uploads/2014/12/Amorgos-Grand-Superior-Bathroom1-e1464286202116.jpg",
  ];

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className="max-w-4xl mx-auto p-4 space-y-6"
      style={{ fontFamily: "Questrial" }}
    >
      {/* Main Content - Slideshow and Description */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Side - Image Slideshow */}
        <div className="w-full lg:w-1/2 h-auto">
          <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
            {images.map((image, index) => (
              <div key={index} className="w-full h-64 lg:h-96">
                <img
                  src={image}
                  alt={`Family Suite ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Side - Description and Enquire Button */}
        <div className="flex flex-col justify-between w-full lg:w-1/2 h-auto p-4 bg-gray-50 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-2">Family Suite</h2>
            <p className="text-gray-700 mb-4">
              The Family Suite is perfect for families seeking extra space and
              comfort. This large suite includes a cozy sofa, a stylish glass
              table, and spacious living areas to ensure a pleasant stay for
              everyone. Ideal for families who need a bigger room to relax and
              enjoy their time together.
            </p>
          </div>
          <Button
            className="bg-blue-500 text-white py-2 px-8 rounded-md"
            size="medium"
            color="primary"
            onClick={handleOpenPortal}
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Full-Width Amenities Section */}
      <div className="w-full mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Deluxe Room Amenities</h3>
        <ul className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1">
          <li className="flex items-center">
            <FaBed className="mr-2" /> 1 Queen Sized Bed
          </li>
          <li className="flex items-center">
            <FaTv className="mr-2" /> Flat Screen TV
          </li>
          <li className="flex items-center">
            <FaPhone className="mr-2" /> Telephone
          </li>
          <li className="flex items-center">
            <FaWifi className="mr-2" /> Wifi
          </li>
          <li className="flex items-center">
            <FaTemperatureHigh className="mr-2" /> A/C & Heating
          </li>
          <li className="flex items-center">
            <FaCoffee className="mr-2" /> Tea & Coffee Facilities *
          </li>
          <li className="flex items-center">
            {" "}
            <MdIron className="mr-2" />
            Iron & Ironing Board *
          </li>
          <li className="flex items-center">
            <FaWind className="mr-2" /> Hairdryer *
          </li>
          <li className="flex items-center">
            <FaBath className="mr-2" /> Attached Bathroom
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-2">* Upon Request</p>
      </div>
      {isPortalOpen && <EnquiryPortal onClose={handleClosePortal} />}
    </div>
  );
};
