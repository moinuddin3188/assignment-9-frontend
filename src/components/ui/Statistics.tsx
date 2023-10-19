"use client";

import { Col, Row } from "antd";
import React from "react";
import CountUp from "react-countup";
import JRButton from "./JRButton";

const Statistics = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/image_8.jpg')`,
    padding: "50px 200px",
    marginTop: "100px",
    color: "white",
  };

  return (
    <section style={sectionStyle}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "2.5rem" }}
      >
        Our Success In Numbers
      </h1>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ textAlign: "center", padding: "50px 0" }}
      >
        <Col className="gutter-row" span={6}>
          <h1 style={{ fontSize: "3rem", letterSpacing: "2px", margin: "0" }}>
            <CountUp start={0} end={540} delay={1} enableScrollSpy={true} />
            <span style={{ color: "#DD4026", fontSize: "3.5rem" }}>+</span>
          </h1>
          <p
            style={{
              fontFamily: `'Tilt Neon', sans-serif`,
              fontWeight: "bold",
              fontSize: "12px",
              marginTop: "0",
              color: "#DDDDDD",
            }}
          >
            Active Users In Our Website
          </p>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1 style={{ fontSize: "3rem", letterSpacing: "2px", margin: "0" }}>
            <CountUp start={0} end={1200} delay={1} enableScrollSpy={true} />
            <span style={{ color: "#DD4026", fontSize: "3.5rem" }}>+</span>
          </h1>
          <p
            style={{
              fontFamily: `'Tilt Neon', sans-serif`,
              fontWeight: "bold",
              fontSize: "12px",
              marginTop: "0",
              color: "#DDDDDD",
            }}
          >
            Customer has been Served
          </p>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1 style={{ fontSize: "3rem", letterSpacing: "2px", margin: "0" }}>
            <CountUp start={0} end={2100} delay={1} enableScrollSpy={true} />
            <span style={{ color: "#DD4026", fontSize: "3.5rem" }}>+</span>
          </h1>
          <p
            style={{
              fontFamily: `'Tilt Neon', sans-serif`,
              fontWeight: "bold",
              fontSize: "12px",
              marginTop: "0",
              color: "#DDDDDD",
            }}
          >
            Jewel has been Repaired
          </p>
        </Col>
        <Col className="gutter-row" span={6}>
          <h1 style={{ fontSize: "3rem", letterSpacing: "2px", margin: "0" }}>
            <CountUp start={0} end={99} delay={1} enableScrollSpy={true} />
            <span style={{ color: "#DD4026", fontSize: "2.6rem" }}>%</span>
          </h1>
          <p
            style={{
              fontFamily: `'Tilt Neon', sans-serif`,
              fontWeight: "bold",
              fontSize: "12px",
              marginTop: "0",
              color: "#DDDDDD",
            }}
          >
            Customers Are Satisfied
          </p>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <JRButton title="CONTACT US" />
      </div>
    </section>
  );
};

export default Statistics;
