import { Button, Carousel } from "antd";
import Navbar from "./Navbar";
import Image from "next/image";
import JRButton from "./JRButton";

const Header = () => {
  const backgroundImageStyle: React.CSSProperties = {
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  };

  return (
    <>
      <Carousel autoplay dotPosition="right">
        <div>
          <div
            style={{
              ...backgroundImageStyle,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/image_8.jpg')`,
            }}
          >
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
                  letterSpacing: "3px",
                  fontSize: "15px",
                  fontFamily: "Crimson Text",
                }}
              >
                JEWELRY REPAIRING SERVICE
              </p>
              <h1 style={{ letterSpacing: "1px", fontFamily: "Crimson Text" }}>
                RESTORING BRILLIANCE. ONE GEM AT A TIME
              </h1>
              <JRButton title="MAKE A BOOKING" />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              ...backgroundImageStyle,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image-9.jpg')`,
            }}
          >
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
                  letterSpacing: "3px",
                  fontSize: "15px",
                  fontFamily: "Crimson Text",
                }}
              >
                JEWELRY REPAIRING SERVICE
              </p>
              <h1 style={{ letterSpacing: "1px", fontFamily: "Crimson Text" }}>
                RESTORING BRILLIANCE. ONE GEM AT A TIME
              </h1>
              <JRButton title="MAKE A BOOKING" />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              ...backgroundImageStyle,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image-7.jpg')`,
            }}
          >
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
                  letterSpacing: "3px",
                  fontSize: "15px",
                  fontFamily: "Crimson Text",
                }}
              >
                JEWELRY REPAIRING SERVICE
              </p>
              <h1 style={{ letterSpacing: "1px", fontFamily: "Crimson Text" }}>
                RESTORING BRILLIANCE. ONE GEM AT A TIME
              </h1>
              <JRButton title="MAKE A BOOKING" />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Header;
