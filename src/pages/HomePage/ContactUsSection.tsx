import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { Button } from "../../components/Common";
import toast, { Toaster } from "react-hot-toast";

export const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We’ll get back to your query shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-us-section p-8">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      {/* Map and General Enquiries */}
      <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 md:space-x-12">
        {/* Map */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1374.9967959738137!2d74.84511557890761!3d34.06549921046359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f0052337157%3A0x8b2aa90b99998611!2sThe%20City%20Stay%20Hotel!5e1!3m2!1sen!2sin!4v1729763269867!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-xl text-gray-600 mr-4 mt-1" />
              <div style={{ fontFamily: "Questrial" }}>
                <p className="font-bold">Our Office Address</p>
                <p>
                  The City Stay Hotel, NH 1, Ram Munshi Bagh, Sonwar Bagh,
                  Srinagar
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-xl text-gray-600 mr-4 mt-1" />
              <div>
                <p className="font-bold">General Enquiries</p>
                <p>dawoodali123@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhoneAlt className="text-xl text-gray-600 mr-4 mt-1" />
              <div>
                <p className="font-bold">Call Us</p>
                <p>+91 9906172993</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-xl text-gray-600 mr-4 mt-1" />
              <div>
                <p className="font-bold">Our Timing</p>
                <p>Mon - Sun, 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        className="mt-8 bg-white p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left Side: Name, Email, Phone */}
          <div className="w-full md:w-1/2 space-y-4">
            <div style={{ fontFamily: "Questrial" }}>
              <label htmlFor="name" className="block mb-2 font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-bold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-bold">
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {/* Right Side: Message */}
          <div className="w-full md:w-1/2">
            <label htmlFor="message" className="block mb-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your message"
              rows={8}
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 px-8 rounded-md"
            size="medium"
            color="primary"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};
