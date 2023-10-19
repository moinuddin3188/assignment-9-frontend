import { Avatar, Carousel, Rate } from "antd";
import Image from "next/image";
import { AntDesignOutlined } from "@ant-design/icons";

const Testimonials = () => {
  return (
    <section style={{ padding: "0px 200px", marginTop: "100px" }}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "2.5rem" }}
      >
        What Our Clients Say
      </h1>
      <Carousel autoplay>
        {/* ---- first section --------- */}
        <div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 74, xl: 100, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: `'Tilt Neon', sans-serif`,
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                Customer Name
              </p>
              <small style={{ fontFamily: `'Tilt Neon', sans-serif` }}>
                Customer Address
              </small>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "14px",
              }}
            >
              <Rate disabled defaultValue={5} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  textAlign: "center",
                  width: "60%",
                  fontFamily: "Crimson Text",
                  letterSpacing: "1px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                ex, nulla reiciendis modi porro ducimus, laborum in ratione
                distinctio nemo eligendi. Ab voluptates incidunt beatae.
              </p>
            </div>
          </div>
        </div>

        {/* -------  2nd ------- */}
        <div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 74, xl: 100, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: `'Tilt Neon', sans-serif`,
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                Customer Name
              </p>
              <small style={{ fontFamily: `'Tilt Neon', sans-serif` }}>
                Customer Address
              </small>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "14px",
              }}
            >
              <Rate disabled defaultValue={5} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  textAlign: "center",
                  width: "60%",
                  fontFamily: "Crimson Text",
                  letterSpacing: "1px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                ex, nulla reiciendis modi porro ducimus, laborum in ratione
                distinctio nemo eligendi. Ab voluptates incidunt beatae.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 74, xl: 100, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: `'Tilt Neon', sans-serif`,
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                Customer Name
              </p>
              <small style={{ fontFamily: `'Tilt Neon', sans-serif` }}>
                Customer Address
              </small>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "14px",
              }}
            >
              <Rate disabled defaultValue={5} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  textAlign: "center",
                  width: "60%",
                  fontFamily: "Crimson Text",
                  letterSpacing: "1px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                ex, nulla reiciendis modi porro ducimus, laborum in ratione
                distinctio nemo eligendi. Ab voluptates incidunt beatae.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
