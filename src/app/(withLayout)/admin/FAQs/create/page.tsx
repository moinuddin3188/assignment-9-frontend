"use client";

import Form from "@/components/form/Form";
import FormTextArea from "@/components/form/FormTextArea";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { useAddFAQMutation } from "@/redux/api/faqsApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateFAQsPage = () => {
    const [addFAQ] = useAddFAQMutation();

    const onSubmit = async (data: any) => {
      try {
        message.loading("Creating...");
        const res = await addFAQ(data).unwrap();
  
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
            label: `FAQs`,
            link: `/admin/FAQs`,
          },
        ]}
      />
      <h1>Create FAQ</h1>
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
            FAQ Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="question" label="Question" required={true} rows={4} />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="answer" label="Answer" required={true} rows={4} />
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

export default CreateFAQsPage;
