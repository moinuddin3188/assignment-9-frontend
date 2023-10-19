import { IService } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Col, List, Row } from "antd";
import React from "react";

const ReviewInformation = ({ service }: { service: IService }) => {
  const information = JSON.parse(getFromLocalStorage("booking-form"));

  const {
    productDetail,
    problem,
    request,
    bookingDate,
    contactNo,
    faceBookIdLink,
    whatsAppNumber,
    address,
  } = information;

  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginTop: "50px",
      }}
    >
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Service</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{service?.title}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Product Details</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{productDetail}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Problem</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{problem}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Special Request</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{request}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Booking Date</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{bookingDate}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Contact No</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{contactNo}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>FaceBook Id Link</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{faceBookIdLink}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>whats App Number</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{whatsAppNumber}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Address</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{address}</p>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>Price</p>
        </Col>
        <Col span={1} style={{ fontWeight: "bold", fontSize: "15px" }}>
          <p>:</p>
        </Col>
        <Col span={19}>
          <p>{service?.price}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewInformation;
