import React, { ReactNode } from "react";
import { Footer, Header } from "../components/Common";

interface MainLayoutProps {
  children: ReactNode; // Proper typing for children prop
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
