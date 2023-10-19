import { Col, Row } from "antd";
import React from "react";
import FormInput from "../form/FormInput";

const Payment = ({price}: {price: number}) => {
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
          <FormInput
            type="number"
            name="payment"
            size="large"
            label="Payment"
            value={String(price)}
            required
          />
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
