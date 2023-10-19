import { Avatar, Col, Row } from "antd";
import React from "react";

const BlogSingleComment = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
        <Col span={2}>
          <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 74, xl: 60, xxl: 100 }} />
        </Col>
        <Col span={22} style={{ fontFamily: "Crimson Text" }}>
          <p>
            Name of Author <span style={{ color: "gray" }}> - 12-16-2023</span>
          </p>
          <p style={{ color: "gray" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            laboriosam neque corrupti esse impedit architecto
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default BlogSingleComment;
