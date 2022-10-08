import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

export const Layout = ({ children }) => {
  const showHeader = true;
  const showSidebar = true;
  const showFooter = true;

  return (
    <div className="layout_container">
      {showHeader && <Header />}
      <div className="layout-content_container">
        {showSidebar && <Sidebar />}
        <div className="layout-children_container">{children}</div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};
