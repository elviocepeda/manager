import React from "react";

export const Paragraph = ({ classname, content }) => {
  return (
    <div className={`atoms-paragraph_container ${classname}`}>
      <p className="atoms-paragraph">
        {content}
      </p>
    </div>
  );
};
