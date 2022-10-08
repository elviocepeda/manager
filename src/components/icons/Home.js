import React from "react";

export const Home = ({ color, onClick, classname, isHovered }) => {
  return (
    <div className={`icons_container ${classname}`} onClick={onClick}>
      <svg viewBox="0 0 24 24">
        {isHovered ? (
          <>
            <path
              d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z"
              fill={color}
            />
            <path
              d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z"
              fill={color}
            />
          </>
        ) : (
          <g>
            <path
              d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"
              fill={color}
            />
          </g>
        )}
      </svg>
    </div>
  );
};
