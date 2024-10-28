import React from "react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      image:
        "https://www.dayshotelpanipat.com/wp-content/uploads/2018/10/7.Suite-min.jpg",
      title: "Furnished Rooms",
      description: "Comfortable and well-furnished rooms for a pleasant stay.",
    },
    {
      id: 2,
      image: "https://mmcoe.edu.in/images/Mess%20&%20cantten/IMG_6050_Edit.jpg",
      title: "Kitchen / Canteen",
      description:
        "A fully equipped kitchen and canteen serving delicious meals.",
    },
    {
      id: 3,
      image:
        "https://miowifi.com/wp-content/uploads/2023/08/shutterstock_457634998-2.jpg",
      title: "WiFi Service",
      description: "High-speed internet access throughout the hotel.",
    },
    {
      id: 4,
      image:
        "https://swiftsecuritas.in/wp-content/uploads/2019/10/house_keeping-1.jpg",
      title: "Housekeeping",
      description:
        "Regular housekeeping services to ensure cleanliness and comfort.",
    },
    {
      id: 5,
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/04/05002609/Attached-bathroom-design-ideas-1.jpg",
      title: "Attached Bathroom",
      description:
        "Deluxe and Family Suite rooms comes with a private attached bathroom for convenience.",
    },
    {
      id: 6,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a4/36/79/hotel-pic.jpg?w=1200&h=-1&s=1",
      title: "Market Near the Hotel",
      description:
        "Convenient access to nearby markets for shopping and essentials.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            style={{ fontFamily: "Questrial" }}
            key={service.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h2>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
