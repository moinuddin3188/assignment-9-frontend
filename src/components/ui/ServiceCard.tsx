import { Badge, Button, Card, Col, Flex, Rate, message } from "antd";
import React from "react";
import Tag from "./Tag";
import { IService } from "@/types";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { getUserInfo } from "@/services/auth.service";

const ServiceCard = ({ service }: { service: IService }) => {
  const {role} = getUserInfo() as any
  const dispatch = useAppDispatch();

  const { title, image, price, tags, status, id } = service || {};

  return (
    <Col className="gutter-row" span={8} style={{ marginBottom: "55px" }}>
      <div style={{ textAlign: "center" }}>
        <Link href={`/services/details/${id}`}>
          <Badge
            count={status}
            style={{
              backgroundColor:
                status === "AVAILABLE"
                  ? "#52C41A"
                  : status === "COMING SOON"
                  ? "#1677ff"
                  : "#faad14",
              fontSize: "8px",
            }}
          >
            <img
              src={image}
              style={{
                border: "1px solid #DDD",
              }}
              width={"100%"}
              alt=""
            />
          </Badge>
          <h2
            style={{
              fontFamily: "Crimson Text",
              fontSize: "1rem",
              fontWeight: "400",
              color: "black",
            }}
          >
            {title}
          </h2>
        </Link>
        <p
          style={{
            color: "#dd4026",
            fontSize: "1.2rem",
            fontWeight: "400",
            fontFamily: "Crimson Text",
            margin: "5px 0",
          }}
        >
          {price} TK
        </p>
        <Rate
          disabled
          defaultValue={5}
          style={{ fontSize: "12px", color: "#dd4026" }}
        />
        <Flex
          wrap="wrap"
          gap="small"
          justify="center"
          style={{ marginTop: "10px" }}
        >
          {tags.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </Flex>
        {(status === "AVAILABLE") && (
          <Flex justify="space-between" style={{ marginTop: "10px" }}>
            <Button
              onClick={() => {
                dispatch(addToCart(service));
                message.success("Added to cart");
              }}
              type="primary"
              style={{ borderRadius: "0", backgroundColor: "#dd4026" }}
            >
              ADD TO CART
            </Button>
            <Link href={`/booking?serviceId=${id}`}>
            <Button
              type="primary"
              style={{ borderRadius: "0", backgroundColor: "#dd4026" }}
            >
              BOOK
            </Button>
            </Link>
          </Flex>
        )}
      </div>
    </Col>
  );
};

export default ServiceCard;
