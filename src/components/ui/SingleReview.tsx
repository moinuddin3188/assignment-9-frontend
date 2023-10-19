import { IReview } from "@/types";
import { Avatar, Col, Flex, Rate, Row } from "antd";
import dayjs from "dayjs";

const SingleReview = ({ review }: { review: IReview }) => {
  const { rating, content, createdAt, user } = review;

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
        <Col span={2}>
          <Avatar
            src={user.profile}
            size={{ xs: 24, sm: 32, md: 40, lg: 74, xl: 60, xxl: 100 }}
          />
        </Col>
        <Col span={22} style={{ fontFamily: "Crimson Text" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
            <Col span={16}>
              <p>
                {user?.firstName + " " + user.lastName}{" "}
                <span style={{ color: "gray" }}>
                  {" "}
                  - {dayjs(createdAt).format("YYYY/MM/DD")}
                </span>
              </p>
              <p style={{ color: "gray" }}>{content}</p>
            </Col>
            <Col span={8}>
              <Flex justify="end">
                <Rate
                  disabled
                  defaultValue={rating}
                  style={{ fontSize: "12px", color: "#dd4026" }}
                />
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SingleReview;
