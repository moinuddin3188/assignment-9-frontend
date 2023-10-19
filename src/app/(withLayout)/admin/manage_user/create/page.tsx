"use client";

import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { genderOptions } from "@/constants/global";
import { useAddUserMutation } from "@/redux/api/userApi";
// import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
// import { useDepartmentsQuery } from "@/redux/api/departmentApi";
// import { adminSchema } from "@/schemas/admin";
// import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateUserPage = () => {
  const [addUser] = useAddUserMutation();

  const onSubmit = async (values: any) => {
    try {
      message.loading("Creating...");
      const res = await addUser(values).unwrap();

      if (res?.id) {
        message.success("Successfully added");
      }
    } catch (error) {
      error && message.error("Failed...");
    }
  };

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: `admin`,
            link: `/admin`,
          },
          {
            label: `users`,
            link: `/admin/manage_user`,
          },
        ]}
      />
      <h1>Create User</h1>
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            User Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="email"
                name="email"
                size="large"
                label="Email"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="firstName"
                size="large"
                label="First Name"
                required
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="lastName"
                size="large"
                label="Last Name"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="password"
                name="password"
                size="large"
                label="Password"
                required
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Gender"
                size="large"
                name="gender"
                options={genderOptions}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="contactNo"
                size="large"
                label="Contact Number"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="faceBookIdLink"
                size="large"
                label="Facebook ID"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="instaIdLink"
                size="large"
                label="Instagram ID"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="whatsAppNumber"
                size="large"
                label="WhatsApp Number"
              />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="address" label="Address" rows={4} />
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserPage;
