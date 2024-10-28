import React, { useState } from "react";
import { Button, EnquiryPortal } from "../../components/Common";

export const HeroSection: React.FC = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleOpenPortal = () => {
    setIsPortalOpen(true);
  };

  const handleClosePortal = () => {
    setIsPortalOpen(false);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-start h-full px-8">
        <div className="text-white z-10">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Questrial" }}
          >
            Welcome to Your Home Away From Home
          </h1>
          <p
            className="mb-8 text-sm md:text-lg"
            style={{ fontFamily: "Questrial" }}
          >
            Located in a peaceful area, our cozy homestay is a warm and
            welcoming place to stay. Enjoy friendly service and the comfort of
            our nicely decorated rooms. We pay attention to every detail to help
            you feel relaxed and at home
          </p>
          <Button size="medium" color="primary" onClick={handleOpenPortal}>
            Enquire Now
          </Button>
        </div>
      </div>

      {isPortalOpen && <EnquiryPortal onClose={handleClosePortal} />}
    </div>
  );
};
