"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/login.png";
import Image from "next/image";
import {
  useUserLoginMutation,
  useUserRegisterMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";

const RegisterPage = () => {
  const [userRegister] = useUserRegisterMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res = await userRegister({ ...data }).unwrap();
      console.log(res);
      if (res?.id) {
        message.success("User Register successfully!");
        router.push("/login");
      }
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
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="lastName"
                type="text"
                size="large"
                label="Last Name"
                required
              />
            </div>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
