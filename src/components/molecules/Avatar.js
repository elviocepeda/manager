import React from "react";
import userAvatar from "../../images/avatar.jpg";

export const Avatar = () => {
  return (
    <div className="molecules-avatar_container">
      <img src={userAvatar} alt="" />
    </div>
  );
};
