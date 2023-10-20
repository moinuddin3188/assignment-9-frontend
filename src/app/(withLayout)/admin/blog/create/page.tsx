"use client";

import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import TagSelectField from "@/components/form/TagFieldSelect";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  blogStatusOptions,
} from "@/constants/global";
import { getCloudinaryUrl, getPresetKey } from "@/helpers/config/envConfig";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

const CreateBlogPage = () => {
  const [addBlog] = useAddBlogMutation();

  const onSubmit = async (values: any) => {
    const cloudinaryUrl = getCloudinaryUrl();
    const presetKey = getPresetKey();

    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    if (obj["publishDate"])
      obj["publishDate"] = dayjs(obj["publishDate"]).toISOString();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    await axios
      .post(cloudinaryUrl, formData)
      .then((res) => {
        obj.cover = res.data?.secure_url;
      })
      .catch((err) => {
        console.error("Error uploading file:", err.message);
        // You can also check err.response for more details
      });

    try {
      message.loading("Creating...");
      const res = await addBlog(obj).unwrap();

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
            label: `blogs`,
            link: `/admin/blog`,
          },
        ]}
      />
      <h1>Create Blog</h1>
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
            Blog Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="title" label="Title" required={true} rows={4} />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="content" label="Content" required={true} rows={4} />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="author"
                size="large"
                label="Author"
                required
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <TagSelectField label="Tags" inputName="tags" required={true} />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Status"
                size="large"
                name="status"
                options={blogStatusOptions}
                required={true}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormDatePicker
                label="Publish Date"
                size="large"
                name="publishDate"
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

export default CreateBlogPage;
