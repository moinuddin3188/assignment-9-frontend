import { Col, Row } from "antd";
import React from "react";
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import FormDatePicker from "../form/FormDatePicker";

const UserInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginTop: "50px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <FormDatePicker
            label="Booking date"
            size="large"
            name="bookingDate"
            required={true}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <FormInput
            type="text"
            name="contactNo"
            size="large"
            label="Contact Number"
            required
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="faceBookIdLink"
            size="large"
            label="Facebook ID"
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <FormInput
            type="text"
            name="whatsAppNumber"
            size="large"
            label="WhatsApp Number"
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <FormTextArea
            name="address"
            label="Address"
            required={true}
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserInfo;
