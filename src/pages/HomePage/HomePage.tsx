import React from "react";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { AboutUsSection } from "./AboutUsSection";
import { GallerySection } from "./GallerySection";
//testimonial here
import { ContactUsSection } from "./ContactUsSection";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <section id="about">
        <AboutUsSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="contact">
        <ContactUsSection />
      </section>
    </div>
  );
};
