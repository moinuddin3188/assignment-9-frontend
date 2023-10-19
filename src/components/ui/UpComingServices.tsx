"use client";

import { Button, Card, Col, Flex, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ArrowRightOutlined } from "@ant-design/icons";
import JRButton from "./JRButton";
import { useServicesQuery } from "@/redux/api/serviceApi";

const UpComingServices = () => {
  const { data } = useServicesQuery({
    status: "COMING_SOON",
    page: 1,
    limit: 4,
  });
  const upcomingServices = data?.services;

  console.log(upcomingServices);

  return (
    <section style={{ padding: "0px 200px", marginTop: "100px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={12}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <h1
              style={{
                fontStyle: "italic",
                fontSize: "3.5rem",
                fontFamily: "Crimson Text",
                marginTop: "0",
              }}
            >
              Up Coming <br /> Service
            </h1>
            <p
              style={{
                fontFamily: "Crimson Text",
                letterSpacing: "1px",
                fontSize: "14px",
                paddingBottom: "15px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos
              delectus ab corporis ut molestias hic, est nulla. Sequi autem
              dolor corporis, possimus dolore ea fuga neque repudiandae placeat
              perspiciatis.corporis ut molestias hic, est nulla. Sequi autem
              dolor corporis, possimus dolore ea fuga neque repudiandae placeat
              perspiciatis.
            </p>
            <JRButton title="AVAILABLE SERVICES" color="black" />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <Flex wrap="wrap" gap="small">
            <div style={{ width: "45%", padding: "0 10px", marginTop: "50px" }}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {upcomingServices?.map((service) => (
                  <Col
                    key={service?.id}
                    className="gutter-row"
                    span={24}
                    style={{ marginBottom: "20px" }}
                  >
                    <Card
                      hoverable
                      cover={
                        <div
                          style={{
                            width: "100%",
                            height: "200px",
                            backgroundImage: `url('${service.image}')`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                      }
                      actions={[
                        <h5
                          style={{
                            color: "#DD4026",
                            cursor: "pointer",
                            margin: "0",
                          }}
                          key="more"
                        >
                          Explore <ArrowRightOutlined />
                        </h5>,
                      ]}
                    >
                      <Meta
                        title={
                          <h4 style={{ textAlign: "center", margin: "0" }}>
                            {service.title}
                          </h4>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div style={{ width: "45%" }}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {upcomingServices?.map((service) => (
                  <Col
                    key={service?.id}
                    className="gutter-row"
                    span={24}
                    style={{ marginBottom: "20px" }}
                  >
                    <Card
                      hoverable
                      cover={
                        <div
                          style={{
                            width: "100%",
                            height: "200px",
                            backgroundImage: `url('${service.image}')`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                      }
                      actions={[
                        <h5
                          style={{
                            color: "#DD4026",
                            cursor: "pointer",
                            margin: "0",
                          }}
                          key="more"
                        >
                          Explore <ArrowRightOutlined />
                        </h5>,
                      ]}
                    >
                      <Meta
                        title={
                          <h4 style={{ textAlign: "center", margin: "0" }}>
                            {service.title}
                          </h4>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Flex>
        </Col>
      </Row>
    </section>
  );
};

export default UpComingServices;
