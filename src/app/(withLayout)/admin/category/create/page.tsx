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
import { useAddCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Col, Row, message } from "antd";
import axios from "axios";
import React, { useState } from "react";

const CreateCategoryPage = () => {
  const [addCategory] = useAddCategoryMutation();

  const onSubmit = async (data: any) => {
    try {
      message.loading("Creating...");
      const res = await addCategory(data).unwrap();

      if (res?.id) {
        message.success("Added Successfully");
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
            label: `Category`,
            link: `/admin/category`,
          },
        ]}
      />
      <h1>Create Category</h1>
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
            Category Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="title"
                size="large"
                label="Title"
                required
              />
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

export default CreateCategoryPage;
