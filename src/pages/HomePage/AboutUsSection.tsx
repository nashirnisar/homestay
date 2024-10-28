import React from "react";

export const AboutUsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-center mb-10">About Us</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg"
          alt="The City Stay Hotel"
          className="w-full md:w-1/2 h-auto object-cover rounded-lg" // Full width on mobile, half width on larger screens
        />
        <div className="flex flex-col items-start p-10">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "Questrial" }}
          >
            Welcome to The City Stay Hotel
          </h2>
          <p className="text-lg mb-4" style={{ fontFamily: "Questrial" }}>
            Nestled in the heart of Srinagar, The City Stay Hotel offers a
            unique blend of comfort and hospitality. Located on NH 1, Ram Munshi
            Bagh, Sonwar Bagh, our hotel is the perfect getaway for travelers
            seeking a cozy stay with easy access to the city’s main attractions.
            Experience warm hospitality, tastefully decorated rooms, and a
            tranquil environment that makes you feel right at home. Our
            dedicated staff is here to ensure that your stay is enjoyable and
            memorable. Whether you're here for business or leisure, The City
            Stay Hotel provides all the amenities you need for a comfortable
            stay.
          </p>
        </div>
      </div>
    </div>
  );
};
