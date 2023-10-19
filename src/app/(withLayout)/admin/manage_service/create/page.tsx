"use client";

import CategoryField from "@/components/form/CategoryField";
import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import TagSelectField from "@/components/form/TagFieldSelect";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { serviceStatusOptions } from "@/constants/global";
import { getCloudinaryUrl, getPresetKey } from "@/helpers/config/envConfig";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { Button, Col, Row, message } from "antd";
import axios from "axios";
import React from "react";

const CreateServicePage = () => {
  const [addService] = useAddServiceMutation();

  const onSubmit = async (values: any) => {
    const cloudinaryUrl = getCloudinaryUrl();
    const presetKey = getPresetKey();

    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    obj["price"] = Number(obj["price"]);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    await axios
      .post(cloudinaryUrl, formData)
      .then((res) => {
        obj.image = res.data?.secure_url;
      })
      .catch((err) => {
        console.error("Error uploading file:", err.message);
        // You can also check err.response for more details
      });

    try {
      message.loading("Creating...");
      const res = await addService(obj).unwrap();

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
            label: `services`,
            link: `/admin/manage_service`,
          },
        ]}
      />
      <h1>Create Service</h1>
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
            Service Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea
                name="title"
                label="Title"
                required={true}
                rows={4}
              />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea
                name="description"
                label="Description"
                required={true}
                rows={4}
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <TagSelectField
                inputName="tags"
                size="large"
                label="Tags"
                required={true}
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="number"
                name="price"
                size="large"
                label="Price"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <CategoryField
                name="categoryId"
                label="Category"
                required={true}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Status"
                size="large"
                name="status"
                options={serviceStatusOptions}
                required={true}
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

export default CreateServicePage;
