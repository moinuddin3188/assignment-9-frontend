"use client"

import { Button } from "antd";
import {useState} from "react"

const JRButton = ({ title, color }: { title: string, color?: string }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const style: React.CSSProperties = {
    background: isHovered ? "#DD4026" : "transparent",
    color: color ? `${isHovered ? "white" : color}` : "white",
    border: isHovered ? "1px solid #DD4026" : `1px solid ${color ? color : "white"}` ,
    fontFamily: `'Tilt Neon', sans-serif`,
    letterSpacing: "2px",
    borderRadius: "0px",
    fontSize: "12px",
    padding: "6px 16px",
  };

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {title}
    </Button>
  );
};

export default JRButton;
