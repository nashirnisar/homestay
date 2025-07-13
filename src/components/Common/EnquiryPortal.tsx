import React from "react";
import { Button } from "./Button";

interface EnquiryPortalProps {
  onClose: () => void;
}

export const EnquiryPortal: React.FC<EnquiryPortalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Booking & Enquiries
        </h2>
        <p className="mb-2">
          For bookings and inquiries, please call us at:
          <span className="font-semibold"> +91 (9906172993)</span>
        </p>
        <p className="mb-4">
          Or reach us via email at:
          <span className="font-semibold"> dawoodali123@gmail.com</span>
        </p>

        <Button size="medium" color="primary" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};
