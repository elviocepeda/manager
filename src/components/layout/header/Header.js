import React from "react";
import { LogoSection } from "./LogoSection";
import { SearchBarSection } from "./SearchBarSection";
import { SettingsSection } from "./SettingsSection";

export const Header = () => {
  return (
    <div className="header_container">
      <SearchBarSection />
      <LogoSection />
      <SettingsSection />
    </div>
  );
};
