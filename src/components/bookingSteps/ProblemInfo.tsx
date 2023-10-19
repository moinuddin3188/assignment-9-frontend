import { Col, Row } from "antd";
import React from "react";
import FormTextArea from "../form/FormTextArea";

const ProblemInfo = () => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ marginTop: "50px" }}
    >
      <Col
        className="gutter-row"
        span={12}
        style={{
          marginBottom: "10px",
        }}
      >
        <FormTextArea
          name="productDetail"
          label="Your Product Details (Brand, Metal Type, Size, etc)"
          rows={4}
          required
        />
      </Col>
      <Col
        className="gutter-row"
        span={12}
        style={{
          marginBottom: "10px",
        }}
      >
        <FormTextArea
          name="problem"
          label="What problem You are facing (Details)"
          rows={4}
          required
        />
      </Col>
      <Col
        className="gutter-row"
        span={12}
        style={{
          marginBottom: "10px",
        }}
      >
        <FormTextArea
          name="request"
          label="If you have any special request"
          rows={4}
        />
      </Col>
    </Row>
  );
};

export default ProblemInfo;
