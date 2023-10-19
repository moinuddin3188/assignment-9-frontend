import { IBlog } from "@/types";
import { Col } from "antd";
import Link from "next/link";
import dayjs from "dayjs";

const RelatedBlogCard = ({ blog }: { blog: IBlog }) => {
  const { title, createdAt, cover, id } = blog;

  return (
    <Col className="gutter-row" span={24}>
      <Link href={`/blogs/details/${id}`}>
        <div style={{ textAlign: "center", fontFamily: "Crimson Text" }}>
          <img src={cover} alt="" width="100%" />
          <p style={{ color: "#DD4026", textTransform: "uppercase" }}>
            {dayjs(createdAt).format("MMM D, YYYY hh:mm A")}
          </p>
          <h1
            style={{
              fontSize: "2em",
              fontStyle: "italic",
              marginTop: "5px",
              color: "black",
            }}
          >
            {title}
          </h1>
        </div>
      </Link>
    </Col>
  );
};

export default RelatedBlogCard;
