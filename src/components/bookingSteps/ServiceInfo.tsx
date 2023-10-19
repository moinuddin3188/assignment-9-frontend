import { IService } from "@/types";
import { Col, Flex, Rate, Row, Tag } from "antd";
import React from "react";

const ServiceInfo = ({ service }: { service: IService }) => {
  const { title, image, description, status, category, tags } = service;

  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{
        marginTop: "50px",
        border: "1px solid #DDD",
        borderRadius: "3px",
      }}
      align="middle"
    >
      <Col className="gutter-row" span={12}>
        <img src={image} width={"100%"} alt="" />
      </Col>
      <Col
        className="gutter-row"
        span={12}
        style={{ fontFamily: "Crimson Text" }}
      >
        <p
          style={{
            fontSize: "1.8em",
            color: "#dd4026",
          }}
        >
          {title}
        </p>
        <Rate
          disabled
          defaultValue={5}
          style={{ fontSize: "12px", color: "#dd4026" }}
        />
        <div
          style={{
            color: "#666",
            lineHeight: "1.45em",
            letterSpacing: "1px",
          }}
        >
          <p>{description}</p>
        </div>

        <h4>
          Status:{" "}
          <span style={{ color: "#dd4026", marginLeft: "10px" }}>{status}</span>
        </h4>
        <h4>
          Category:{" "}
          <span style={{ color: "#dd4026", marginLeft: "10px" }}>
            {category.title}
          </span>
        </h4>

        <div style={{ marginTop: "50px" }}>
          <h2 style={{ fontStyle: "italic" }}>Tags</h2>
          <Flex wrap="wrap" gap="small">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Flex>
        </div>
      </Col>
    </Row>
  );
};

export default ServiceInfo;
