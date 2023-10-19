"use client"

import Form from "../form/Form";
import { Col, Row } from "antd";
import FormTextArea from "../form/FormTextArea";
import FormInput from "../form/FormInput";

const BlogCommentForm = () => {
  const onSubmit = async () => {};

  return (
    <div>
      <Form submitHandler={onSubmit}>
        <h1
          style={{
            fontFamily: "Crimson Text",
            fontSize: "2.77em",
            fontWeight: "600",
            fontStyle: "italic",
            marginBottom: "5px",
            marginTop: "50px"
          }}
        >
          Leave a comment
        </h1>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={24}
            style={{ marginBottom: "10px" }}
          >
            <FormTextArea name="comment" label="Comment" rows={4} />
          </Col>
          <Col
            className="gutter-row"
            span={12}
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
            span={12}
            style={{ marginBottom: "10px" }}
          >
            <FormInput
              type="text"
              name="name"
              size="large"
              label="Name"
              required
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BlogCommentForm;
