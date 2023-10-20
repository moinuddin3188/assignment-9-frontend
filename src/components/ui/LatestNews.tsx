"use client"

import { Avatar, Col, Flex, Row } from "antd";
import Image from "next/image";
import { CommentOutlined, CalendarOutlined } from "@ant-design/icons";
import JRButton from "./JRButton";
import { useBlogsQuery } from "@/redux/api/blogApi";
import Link from "next/link";

const LatestNews = () => {
  const { data } = useBlogsQuery({ page: 1, limit: 4 });
  const blogs = data?.blogs;

  return (
    <section style={{ padding: "0px 200px", marginTop: "100px" }}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "3rem" }}
      >
        Latest News
      </h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {blogs?.map((blog) => (
          <Col key={blog?.id} className="gutter-row" span={8}>
            <div
              style={{
                border: "1px solid #f0f0f0",
                borderRadius: "3px",
                padding: "15px",
                fontFamily: `'Tilt Neon', sans-serif`,
              }}
            >
              <div>
                <img
                  src={blog?.cover}
                  alt="News"
                  width="100%"
                  style={{ borderRadius: "3px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    paddingRight: "15px",
                    borderRight: "1px solid gray",
                  }}
                >
                  <CalendarOutlined style={{ marginRight: "3px" }} />
                  10-16-2023
                </p>
                <p
                  style={{
                    marginLeft: "15px",
                  }}
                >
                  <CommentOutlined style={{ marginRight: "3px" }} />
                  Comments
                </p>
              </div>
              <h3 style={{ color: "#DD4026" }}>News Title here</h3>
              <p
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  paddingBottom: "15px",
                  letterSpacing: ".5px",
                  color: "gray",
                  fontSize: "12px",
                }}
              >
                {blog?.content.length > 50
                  ? blog?.content.substring(0, 200) + "..."
                  : blog?.content}
              </p>
              <Flex justify="space-between" align="center">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    style={{ backgroundColor: "gray", verticalAlign: "middle" }}
                    size="small"
                    gap={2}
                  >
                    U
                  </Avatar>
                  <p
                    style={{
                      fontWeight: "bold",
                      marginLeft: "5px",
                      fontSize: "13px",
                    }}
                  >
                    {blog?.author}
                  </p>
                </div>
                <Link href={`/blogs/details/${blog?.id}`}>
                  <JRButton title="READ" color="black" />
                </Link>
              </Flex>
            </div>
          </Col>
        ))}
      </Row>

      <Flex justify="center" style={{ marginTop: "50px" }}>
        <JRButton title="BLOGS" color="black" />
      </Flex>
    </section>
  );
};

export default LatestNews;
