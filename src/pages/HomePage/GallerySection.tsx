import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, EnquiryPortal } from "../../components/Common";

export const GallerySection: React.FC = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const handleOpenPortal = () => {
    setIsPortalOpen(true);
  };

  const handleClosePortal = () => {
    setIsPortalOpen(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Shows 3 images at a time on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Only one image visible on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bedroom",
      label: "Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bathroom",
      label: "Bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Corridor",
      label: "Corridor",
    },
    {
      src: "https://images.unsplash.com/photo-1525381846010-6463f02f61ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Stairs",
      label: "Stairs",
    },
    {
      src: "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Kitchen",
      label: "Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Deluxe Room",
      label: "Deluxe Room",
    },
  ];

  return (
    <div className="gallery-section p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />

              <Button
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md"
                size="medium"
                color="primary"
                onClick={handleOpenPortal}
              >
                Enquire Now
              </Button>
            </div>
            <div>
              <p className="text-center" style={{ fontFamily: "Questrial" }}>
                {image.label}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      {isPortalOpen && <EnquiryPortal onClose={handleClosePortal} />}
    </div>
  );
};
