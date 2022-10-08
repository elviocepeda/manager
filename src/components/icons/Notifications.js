import React from "react";

export const Notifications = ({ color, onClick, classname, isHovered }) => {
  return (
    <div className={`icons_container ${classname}`} onClick={onClick}>
      <svg viewBox="0 0 24 24">
        {isHovered ? (
          <path
            d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0ZM7,5h5a1,1,0,0,1,0,2H7A1,1,0,0,1,7,5ZM17,15H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Zm0-4H7A1,1,0,0,1,7,9H17a1,1,0,0,1,0,2Z"
            fill={color}
          />
        ) : (
          <>
            <path
              d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"
              fill={color}
            />
            <path d="M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z" fill={color} />
            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" fill={color} />
            <path d="M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" fill={color} />
          </>
        )}
      </svg>
    </div>
  );
};
