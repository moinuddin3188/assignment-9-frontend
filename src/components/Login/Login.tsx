"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/login.png";
import Image from "next/image";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col
        sm={12}
        md={16}
        lg={12}
        style={{
          width: "100%",
          backgroundImage: `url('background.jpg')`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        {/* <Image src={loginImage} width={500} alt="login image" /> */}
      </Col>
      <Col sm={12} md={8} lg={12} style={{ padding: "0 100px" }}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                required
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
          <Link style={{ marginTop: "20px" }} href="/register">
            <Button style={{ marginTop: "20px" }} type="primary">Create an Account</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
