"use client";

import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { genderOptions } from "@/constants/global";
import { getCloudinaryUrl, getPresetKey } from "@/helpers/config/envConfig";
import { useAddAdminMutation } from "@/redux/api/adminApi";
import { Button, Col, Row, message } from "antd";
import axios from "axios";
import React, { useState } from "react";

const CreateAdminPage = () => {
  const [addAdmin] = useAddAdminMutation();

  const onSubmit = async (values: any) => {
    const cloudinaryUrl = getCloudinaryUrl();
    const presetKey = getPresetKey();

    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    await axios
      .post(cloudinaryUrl, formData)
      .then((res) => {
        obj.profile = res.data?.secure_url;
      })
      .catch((err) => {
        console.error("Error uploading file:", err.message);
        // You can also check err.response for more details
      });

    try {
      message.loading("Creating...");
      const res = await addAdmin(obj);

      message.success("Added Successfully");
    } catch (error) {
      error && message.error("Failed...");
    }
  };

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: `super admin`,
            link: `/super_admin`,
          },
          {
            label: `admins`,
            link: `/super_admin/admin`,
          },
        ]}
      />
      <h1>Create Admin</h1>
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
            Admin Information
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
                required={true}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="contactNo"
                size="large"
                label="Contact Number"
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
              <FormTextArea
                name="address"
                label="Address"
                required={true}
                rows={4}
              />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginTop: "15px" }}>
              <UploadImage name="file" />
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

export default CreateAdminPage;
