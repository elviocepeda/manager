import React from "react";
import img1 from "./img/1.jpg";

export const ProductCard = () => {
  return (
    <div className="molecules-productcard_container">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};
