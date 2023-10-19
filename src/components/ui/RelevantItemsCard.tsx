import { IService } from "@/types";
import { Col } from "antd";
import Link from "next/link";
import React from "react";

const RelevantItemsCard = ({ service }: { service: IService }) => {
  const { title, price, image,id } = service;

  return (
    <Col className="gutter-row" span={6}>
      <Link href={`/services/details/${id}`}>
      <div style={{ border: "1px solid #999", borderRadius: "3px" }}>
        <img
          src={image}
          width="100%"
          style={{ borderRadius: "3px", borderBottom: "1px solid #999" }}
        />
        <div style={{ padding: "10px" }}>
          <h2
            style={{
              fontFamily: "Crimson Text",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#DD4026",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "#dd4026",
              fontSize: "1.2rem",
              fontWeight: "400",
              fontFamily: "Crimson Text",
              margin: "5px 0",
              textAlign: "center",
            }}
          >
            {price} TK
          </p>
        </div>
      </div>
      </Link>
    </Col>
  );
};

export default RelevantItemsCard;
