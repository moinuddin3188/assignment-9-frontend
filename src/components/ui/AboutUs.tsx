import { Col, Row } from "antd";
import { UsergroupAddOutlined, UngroupOutlined, BulbOutlined, BuildOutlined } from "@ant-design/icons";
import JRButton from "./JRButton";

const AboutUs = () => {
  const cardStyle: React.CSSProperties = {
    fontFamily: "Crimson Text",
    padding: "50px 80px",
    textAlign: "center",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <section style={{ marginTop: "100px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ width: "100%" }}>
        <Col
          span={12}
          style={{ padding: "0 100px", display: "flex", alignItems: "center" }}
        >
          <div>
            <h1
              style={{
                marginTop: "0",
                fontFamily: "Crimson Text",
                fontStyle: "italic",
                fontSize: "3rem",
              }}
            >
              Know About Us
            </h1>
            <JRButton title="CONTACT US" color="black" />
          </div>
        </Col>
        <Col
          span={6}
          style={{
            ...cardStyle,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/cat-5.jpg')`,
          }}
        >
          <div>
            <UsergroupAddOutlined
              style={{ fontSize: "40px", color: "#DD4026" }}
            />
            <p
              style={{
                fontWeight: "bold",
                fontFamily: `'Tilt Neon', sans-serif`,
                letterSpacing: "3px",
              }}
            >
              OUR TEAM
            </p>
            <p style={{ color: "#DDD" }}>
              Introduce the key members of your team, including their roles and
              contributions. Include brief bios and photos to add a personal
              touch.
            </p>
          </div>
        </Col>
        <Col
          span={6}
          style={{
            ...cardStyle,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/cat-1.jpg')`,
          }}
        >
          <div>
            <UngroupOutlined style={{ fontSize: "40px", color: "#DD4026" }} />
            <p
              style={{
                fontWeight: "bold",
                fontFamily: `'Tilt Neon', sans-serif`,
                letterSpacing: "3px",
              }}
            >
              OUR STORY
            </p>
            <p style={{ color: "#DDD" }}>
              Introduce the key members of your team, including their roles and
              contributions. Include brief bios and photos to add a personal
              touch.
            </p>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ width: "100%" }}>
        <Col
          span={6}
          style={{
            ...cardStyle,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/cat-5.jpg')`,
          }}
        >
          <div>
            <BulbOutlined
              style={{ fontSize: "40px", color: "#DD4026" }}
            />
            <p
              style={{
                fontWeight: "bold",
                fontFamily: `'Tilt Neon', sans-serif`,
                letterSpacing: "3px",
              }}
            >
              OUR MISSION
            </p>
            <p style={{ color: "#DDD" }}>
              Introduce the key members of your team, including their roles and
              contributions. Include brief bios and photos to add a personal
              touch.
            </p>
          </div>
        </Col>

        <Col
          span={6}
          style={{
            ...cardStyle,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/cat-2.jpg')`,
          }}
        >
          <div>
            <BuildOutlined style={{ fontSize: "40px", color: "#DD4026" }} />
            <p
              style={{
                fontWeight: "bold",
                fontFamily: `'Tilt Neon', sans-serif`,
                letterSpacing: "3px",
              }}
            >
              PARTNERSHIP
            </p>
            <p style={{ color: "#DDD" }}>
              Introduce the key members of your team, including their roles and
              contributions. Include brief bios and photos to add a personal
              touch.
            </p>
          </div>
        </Col>
        <Col
          span={12}
          style={{ padding: "0 100px", display: "flex", alignItems: "center" }}
        >
          <div>
            <h5
              style={{
                fontFamily: "Crimson Text",
                fontStyle: "italic",
                color: "#BBB",
              }}
            >
              About Us
            </h5>
            <p style={{fontFamily: "Crimson Text", fontStyle: "italic"}}>
              These cards allow you to tell a comprehensive story about your
              business, its mission, the people behind it, and the principles
              that drive your operations. Each card can contain engaging
              visuals, such as images its mission, the people behind it, and the
              principles. Each card can contain engaging
              visuals, such as images its mission, the people behind it, and the
              principles
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutUs;
