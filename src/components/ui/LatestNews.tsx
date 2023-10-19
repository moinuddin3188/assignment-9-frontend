import { Avatar, Col, Flex, Row } from "antd";
import Image from "next/image";
import { CommentOutlined, CalendarOutlined } from "@ant-design/icons";
import JRButton from "./JRButton";

const LatestNews = () => {
  return (
    <section style={{ padding: "0px 200px", marginTop: "100px" }}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "3rem" }}
      >
        Latest News
      </h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
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
                src="/blog_1.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              odio harum debitis incidunt error culpa, aspernatur tempora
              repellendus, ab praesentium ipsam ipsa eum tenetur atque
              obcaecati. Beatae officiis neque dolor.
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
                  Author Name
                </p>
              </div>
              <JRButton title="READ" color="black" />
            </Flex>
          </div>
        </Col>

        {/* ------- 2nd card --------- */}
        <Col className="gutter-row" span={8}>
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
                src="/blog_1.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              odio harum debitis incidunt error culpa, aspernatur tempora
              repellendus, ab praesentium ipsam ipsa eum tenetur atque
              obcaecati. Beatae officiis neque dolor.
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
                  Author Name
                </p>
              </div>
              <JRButton title="READ" color="black" />
            </Flex>
          </div>
        </Col>

        {/* ------- 3rd ---------- */}
        <Col className="gutter-row" span={8}>
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
                src="/blog_1.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              odio harum debitis incidunt error culpa, aspernatur tempora
              repellendus, ab praesentium ipsam ipsa eum tenetur atque
              obcaecati. Beatae officiis neque dolor.
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
                  Author Name
                </p>
              </div>
              <JRButton title="READ" color="black" />
            </Flex>
          </div>
        </Col>
      </Row>

      <Flex justify="center" style={{marginTop: "50px"}}>
        <JRButton title="BLOGS" color="black" />
      </Flex>
    </section>
  );
};

export default LatestNews;
