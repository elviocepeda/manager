import React from "react";
import { InputText } from "../../atoms";
import { SearchGlass } from "../../icons";

export const SearchBarSection = () => {
  return (
    <div className="search-section_container">
      <InputText />
      <SearchGlass className="search-section-icons" color="#314E52" />
    </div>
  );
};
