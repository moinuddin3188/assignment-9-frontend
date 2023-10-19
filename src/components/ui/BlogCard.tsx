import React from "react";
import JRBreadcrumb from "./JRBreadcrumb";
import { Button } from "antd";
import { IBlog } from "@/types";
import Link from "next/link";
import dayjs from "dayjs";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  const { id, title, content, author, publishDate, createdAt, cover } = blog;

  return (
    <div style={{ fontFamily: "Crimson Text", marginBottom: "100px" }}>
      <h1
        style={{ fontSize: "2.77em", fontStyle: "italic", marginBottom: "5px" }}
      >
        {title}
      </h1>
      <JRBreadcrumb
        items={[
          {
            label: (
              <small style={{ color: "#DD4026", textTransform: "uppercase" }}>
                {blog && dayjs(createdAt).format("MMM D, YYYY hh:mm A")}
              </small>
            ),
            link: "",
          },
          {
            label: (
              <small style={{ color: "#999", textTransform: "uppercase" }}>
                {author}
              </small>
            ),
            link: "",
          },
          {
            label: (
              <small style={{ color: "#999", textTransform: "uppercase" }}>
                2COMMENTS
              </small>
            ),
            link: "",
          },
        ]}
      />
      <img src={cover} alt="" width="100%" style={{ marginTop: "20px" }} />
      <div
        style={{
          color: "#999",
          marginTop: "20px",
          lineHeight: "1.5rem",
          letterSpacing: "0.5px",
        }}
      >
        <p>
          {content?.length > 500 ? content.substring(0, 500) + "..." : content}
        </p>
      </div>
      <Link href={`/blogs/details/${id}`}>
        <Button
          type="primary"
          style={{
            backgroundColor: "#DD4026",
            borderRadius: "0",
            marginTop: "10px",
          }}
        >
          READ MORE
        </Button>
      </Link>
    </div>
  );
};

export default BlogCard;
