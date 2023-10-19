"use client";

import BlogCommentForm from "@/components/ui/BlogCommentForm";
import BlogFilter from "@/components/ui/BlogFilter";
import BlogSingleComment from "@/components/ui/BlogSingleComment";
import Footer from "@/components/ui/Footer";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import Navbar from "@/components/ui/Navbar";
import RelatedBlogCard from "@/components/ui/RelatedBlogCard";
import { useBlogQuery, useBlogsQuery } from "@/redux/api/blogApi";
import { Col, Flex, Input, Row, Tag } from "antd";
import dayjs from "dayjs";

type IDProps = {
  params: any;
};

const BlogDetailsPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useBlogQuery(id);
  const {
    title,
    content,
    author,
    publishDate,
    createdAt,
    cover,
    tags,
    comments,
  } = data || {};

  const { data: relatedBlog } = useBlogsQuery({ tags: tags });
  const relatedBlogs = relatedBlog?.blogs;

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
                label: <span style={{ color: "#DD4026" }}>BLOGS</span>,
                link: `/blogs`,
              },
              {
                label: <span>DETAILS</span>,
                link: "",
              },
            ]}
          />
        </Flex>
      </div>

      <section style={{ padding: "0 200px", marginTop: "50px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={16}>
            <JRBreadcrumb
              items={[
                {
                  label: (
                    <small
                      style={{ color: "#DD4026", textTransform: "uppercase" }}
                    >
                      {dayjs(createdAt).format("MMM D, YYYY hh:mm A")}
                    </small>
                  ),
                  link: "",
                },
                {
                  label: (
                    <small
                      style={{ color: "#999", textTransform: "uppercase" }}
                    >
                      {author}
                    </small>
                  ),
                  link: "",
                },
                {
                  label: (
                    <small
                      style={{ color: "#999", textTransform: "uppercase" }}
                    >
                      2COMMENTS
                    </small>
                  ),
                  link: "",
                },
              ]}
            />
            <img
              src={cover}
              alt=""
              width="100%"
              style={{ marginTop: "20px" }}
            />
            <div
              style={{
                color: "#999",
                marginTop: "20px",
                lineHeight: "1.5rem",
                letterSpacing: "0.5px",
                fontFamily: "Crimson Text",
              }}
            >
              <p>{content}</p>

              <Flex wrap="wrap" gap="small" style={{ marginTop: "100px" }}>
                {tags?.map((tag: string, index: string) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Flex>
            </div>

            <BlogCommentForm />

            <div>
              <h1
                style={{
                  fontFamily: "Crimson Text",
                  fontSize: "2.77em",
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Comments
              </h1>
              <BlogSingleComment />
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={{ marginTop: "50px" }}>
              <h1
                style={{
                  fontFamily: "Crimson Text",
                  fontSize: "2.77em",
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                You May Also Like
              </h1>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {relatedBlogs?.map((blog) => (
                  <RelatedBlogCard key={blog.id} blog={blog} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
