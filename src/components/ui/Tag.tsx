"use client"

import React, { useState } from "react";

const Tag = ({ title }: { title: string }) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

  const tagStyle: React.CSSProperties = {
    border: `1px solid ${isHovered ? "#dd4026" : "gray"}`,
    fontFamily: "Crimson Text",
    fontSize: "13px",
    padding: "3px 14px",
    fontStyle: "italic",
    cursor: "pointer",
    color: isHovered ? "#dd4026" : "black"
  };

  return (
    <div style={tagStyle} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <p style={{margin: "0"}}>{title}</p>
    </div>
  );
};

export default Tag;
