"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { addTag } from "@/redux/slices/serviceFilterSlice";

const AvailableService = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const findService = (tags: string[], route: string) => {
    dispatch(addTag(tags));
    router.push(route);
  };

  return (
    <section style={{ padding: "0px 200px" }}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "3.5rem" }}
      >
        What We Offer
      </h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <div>
                <Image src="/ring.jpg" alt="Ring" height={193} width={256} />
              </div>
            </Col>
            <Col
              className="gutter-row"
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Crimson Text",
              }}
              span={12}
            >
              <div>
                <h1
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Ring Repairing
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur delectus, debitis ducimus distinctio minus odit
                  accusamus.
                </p>
                <h3
                  onClick={() => findService(["Ring"], "/services")}
                  style={{ color: "#DD4026", cursor: "pointer" }}
                >
                  Explore <ArrowRightOutlined />
                </h3>
              </div>
            </Col>
          </Row>
        </Col>

        {/* ----- Second card ----- */}
        <Col className="gutter-row" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <div>
                <Image
                  src="/service-3.jpg"
                  alt="Ring"
                  height={193}
                  width={256}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Crimson Text",
              }}
              span={12}
            >
              <div>
                <h1
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Chain Repairing
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur delectus, debitis ducimus distinctio minus odit
                  accusamus.
                </p>
                <h3
                  onClick={() => findService(["Chain"], "/services")}
                  style={{ color: "#DD4026", cursor: "pointer" }}
                >
                  Explore <ArrowRightOutlined />
                </h3>
              </div>
            </Col>
          </Row>
        </Col>

        {/* ---- 3d card ---- */}
        <Col className="gutter-row" span={12} style={{ marginTop: "40px" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Crimson Text",
              }}
              span={12}
            >
              <div style={{ textAlign: "right" }}>
                <h1
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Watch Repairing
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur delectus, debitis ducimus distinctio minus odit
                  accusamus.
                </p>
                <h3
                  onClick={() => findService(["Watch"], "/services")}
                  style={{ color: "#DD4026", cursor: "pointer" }}
                >
                  Explore <ArrowRightOutlined />
                </h3>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                <Image
                  src="/service-2.jpg"
                  alt="Ring"
                  height={193}
                  width={256}
                />
              </div>
            </Col>
          </Row>
        </Col>

        {/* ---- 4th card ---- */}
        <Col className="gutter-row" span={12} style={{ marginTop: "40px" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Crimson Text",
              }}
              span={12}
            >
              <div style={{ textAlign: "right" }}>
                <h1
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Cleaning and Polishing
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur delectus, debitis ducimus distinctio minus odit
                  accusamus.
                </p>
                <h3
                  onClick={() =>
                    findService(["Cleaning", "polish"], "/services")
                  }
                  style={{ color: "#DD4026", cursor: "pointer" }}
                >
                  Explore <ArrowRightOutlined />
                </h3>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                <Image
                  src="/service-5.jpg"
                  alt="Ring"
                  height={193}
                  width={256}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default AvailableService;
