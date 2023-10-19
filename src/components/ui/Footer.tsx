import { Col, Row } from "antd";
import Image from "next/image";
import { CaretDownFilled, PhoneFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222222",
        padding: "100px 200px",
        marginTop: "100px",
        textAlign: "center",
        color: "white",
        fontFamily: `'Tilt Neon', sans-serif`,
      }}
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="center"
        align="middle"
      >
        <Col className="gutter-row" span={8}>
          <div>
            <CaretDownFilled style={{ fontSize: "30px" }} />
            <p style={{ fontWeight: "bold" }}>ADDRESS</p>
            <p style={{ fontFamily: "Crimson Text", color: "#BBB" }}>
              5 South Wabash Suite 614 Chicago, IL 60603
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/logo_footer.png"
                alt="Logo"
                width={264}
                height={113}
              />
            </div>
            <p
              style={{
                fontFamily: "Crimson Text",
                color: "#BBB",
                lineHeight: "25px",
                marginTop: "35px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              velit nemo libero sint? Placeat cumque
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
            <PhoneFilled style={{ fontSize: "30px" }} />
            <p style={{ fontWeight: "bold" }}>CONTACT</p>
            <p style={{ fontFamily: "Crimson Text", color: "#BBB" }}>
              example@gmail.con
            </p>
            <p style={{ fontFamily: "Crimson Text", color: "#BBB" }}>
              (494)-742-2538
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
