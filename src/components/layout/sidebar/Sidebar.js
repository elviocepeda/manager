import React from "react";
import { Link } from "react-router-dom";
import { NAVBAR } from "./constants";
import { useHover } from "../../hooks/useHover";

export const Sidebar = () => {
  const [hoverRef, isHovered] = useHover();

  const style = {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="sidebar_container">
      <ul>
        {NAVBAR.map((item) => {
          const { id, path, text, icon } = item;
          const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
          return (
            <li key={id} ref={hoverRef}>
              <Link to={path} style={style}>
                {icon}
                <span>{capitalizedText}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
