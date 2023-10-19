import { Input } from "antd";
import React from "react";

const BlogFilter = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Input
        type="text"
        size="large"
        placeholder="Search.."
        style={{ width: "100%" }}
      />
      <h2
        style={{
          fontFamily: "Crimson Text",
          fontStyle: "italic",
          marginTop: "30px",
        }}
      >
        Browse Categories:
      </h2>
      <div
        style={{
          fontFamily: `'Tilt Neon', sans-serif`,
          fontSize: "0.61rem",
          letterSpacing: "1px",
          color: "#999",
          cursor: "pointer",
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        <p>Ring</p>
        <p>Diamond</p>
        <p>Ring</p>
        <p>Diamond</p>
        <p>Ring</p>
        <p>Diamond</p>
        <p>Ring</p>
        <p>Diamond</p>
      </div>
    </div>
  );
};

export default BlogFilter;
