"use client";

import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import TagSelectField from "@/components/form/TagFieldSelect";
import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { blogStatusOptions, genderOptions } from "@/constants/global";
import { useBlogQuery, useUpdateBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";
import dayjs from "dayjs";

type IDProps = {
  params: any;
};

const EditBlogPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useBlogQuery(id);
  const [updateBLog] = useUpdateBlogMutation();

  const onSubmit = async (values: any) => {
    if (values["publishDate"])
      values["publishDate"] = dayjs(values["publishDate"]).toISOString();
    try {
      message.loading("Updating-----");
      const res = await updateBLog({ id, body: values }).unwrap();

      if (res?.id) {
        message.success("Blog Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    content: data?.content || "",
    author: data?.author || "",
    tags: data?.tags || "",
    status: data?.status || "",
    publishDate: data?.publishDate || Date.now(),
  };

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "blogs",
            link: "/admin/blog",
          },
        ]}
      />
      <ActionBar title="Update Admin" />
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="title" label="Title" rows={4} />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="content" label="Content" rows={4} />
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
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <TagSelectField label="Tags" inputName="tags" />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Status"
                size="large"
                name="status"
                options={blogStatusOptions}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormDatePicker
                label="Publish Date"
                size="large"
                name="publishDate"
              />
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditBlogPage;
