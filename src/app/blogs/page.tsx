"use client";

import BlogCard from "@/components/ui/BlogCard";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useBlogsQuery } from "@/redux/api/blogApi";
import { useDebounced } from "@/redux/hooks";
import { Button, Col, Input, Pagination, Row } from "antd";
import React, { useState } from "react";

const BlogPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["page"] = page;
  query["limit"] = 5;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data } = useBlogsQuery({ ...query });
  const blogs = data?.blogs;
  const meta = data?.meta;

  console.log(query);

  return (
    <>
      <Navbar />
      <section style={{ padding: "0 200px", marginTop: "50px" }}>
        <h1
          style={{
            fontFamily: "Crimson Text",
            fontStyle: "italic",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Blogs & News
        </h1>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={16}>
            {blogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            <Pagination
              onChange={(pageNumber) => setPage(pageNumber)}
              defaultCurrent={1}
              total={meta?.total}
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={{ paddingTop: "100px" }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#DD4026",
                  borderRadius: "0",
                  width: "100%",
                }}
              >
                REMOVE FILTER
              </Button>
              <Input
                type="text"
                size="large"
                placeholder="Search.."
                style={{ width: "100%", marginTop: "20px" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <h2
                style={{
                  fontFamily: "Crimson Text",
                  fontStyle: "italic",
                  marginTop: "30px",
                }}
              >
                Browse Categories:
              </h2>
              <div
                style={{
                  fontFamily: `'Tilt Neon', sans-serif`,
                  fontSize: "0.61rem",
                  letterSpacing: "1px",
                  color: "#999",
                  cursor: "pointer",
                  fontWeight: "400",
                  textTransform: "uppercase",
                }}
              >
                <p onClick={() => setSearchTerm("Ring")}>Ring</p>
                <p onClick={() => setSearchTerm("Watch")}>Watch</p>
                <p onClick={() => setSearchTerm("Chain")}>Chain</p>
                <p onClick={() => setSearchTerm("Cleaning and polishing")}>
                  Cleaning and polishing
                </p>
                <p onClick={() => setSearchTerm("Earring")}>Earring</p>
                <p onClick={() => setSearchTerm("Bracelet")}>Bracelet</p>
                <p onClick={() => setSearchTerm("Stone Replacement")}>
                  Stone Replacement
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
