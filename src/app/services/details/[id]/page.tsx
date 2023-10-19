"use client";

import Footer from "@/components/ui/Footer";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import JRButton from "@/components/ui/JRButton";
import Navbar from "@/components/ui/Navbar";
import RelevantItems from "@/components/ui/RelevantItems";
import ReviewForm from "@/components/ui/ReviewForm";
import SingleReview from "@/components/ui/SingleReview";
import Tag from "@/components/ui/Tag";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { isLoggedIn } from "@/services/auth.service";
import { IReview, IService } from "@/types";
import { Button, Col, Flex, Rate, Row } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const DetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  const userLoggedIn = isLoggedIn();
  const dispatch = useAppDispatch();

  const { data } = useServiceQuery(id);
  const { title, image, description, price, status, category, tags, reviews } =
    data || {};

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#F7F8FC",
          padding: "2.85em 3rem 3.25em 3rem",
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            fontFamily: "Crimson Text",
            fontSize: "2.66rem",
            fontWeight: "600",
            letterSpacing: "3px",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <Flex justify="center" style={{ fontFamily: "Crimson Text" }}>
          <JRBreadcrumb
            items={[
              {
                label: <span style={{ color: "#DD4026" }}>SERVICES</span>,
                link: `/services`,
              },
              {
                label: <span>DETAILS</span>,
                link: "",
              },
            ]}
          />
        </Flex>
      </div>

      <section style={{ padding: "0 200px", borderBottom: "1px solid #DDD" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <img src={image} width={"100%"} alt="" />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{ fontFamily: "Crimson Text" }}
          >
            <Flex justify="space-between" align="center">
              <p
                style={{
                  fontSize: "1.8em",
                  color: "#dd4026",
                }}
              >
                {price} Tk.
              </p>
              <Rate
                disabled
                defaultValue={5}
                style={{ fontSize: "12px", color: "#dd4026" }}
              />
            </Flex>
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
              <span style={{ color: "#dd4026", marginLeft: "10px" }}>
                {status}
              </span>
            </h4>
            <h4>
              Category:{" "}
              <span style={{ color: "#dd4026", marginLeft: "10px" }}>
                {category?.title}
              </span>
            </h4>

            {status === "AVAILABLE" && (
              <Flex justify="space-between" style={{ marginTop: "50px" }}>
                <Button
                  onClick={() => dispatch(addToCart(data))}
                  type="primary"
                  style={{ backgroundColor: "#dd4026", borderRadius: "0" }}
                >
                  ADD TO CART
                </Button>
                <Button
                  type="primary"
                  style={{ backgroundColor: "#dd4026", borderRadius: "0" }}
                >
                  BOOK
                </Button>
              </Flex>
            )}

            <div style={{ marginTop: "50px", paddingBottom: "100px" }}>
              <h2 style={{ fontStyle: "italic" }}>Tags</h2>
              <Flex wrap="wrap" gap="small">
                {tags &&
                  tags.map((tag: string, index: number | string) => (
                    <Tag key={index} title={tag} />
                  ))}
              </Flex>
            </div>
          </Col>
        </Row>
      </section>

      <section
        style={{
          padding: "0 200px",
          marginTop: "50px",
          fontFamily: "Crimson Text",
        }}
      >
        {userLoggedIn && <ReviewForm serviceId={id} />}
        <h1 style={{ fontStyle: "italic", marginTop: "40px" }}>Reviews</h1>
        {reviews?.length ? (
          reviews.map((review: IReview) => (
            <SingleReview key={review?.id} review={review} />
          ))
        ) : (
          <p>Be the first cretic for this service</p>
        )}
      </section>

      <RelevantItems tags={tags} />
      <Footer />
    </>
  );
};

export default DetailsPage;
