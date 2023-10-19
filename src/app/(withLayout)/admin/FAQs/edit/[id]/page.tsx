"use client";

import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { genderOptions } from "@/constants/global";
import { useFAQQuery, useUpdateFAQMutation } from "@/redux/api/faqsApi";
// import {
//   useSingleDepartmentQuery,
//   useUpdateDepartmentMutation,
// } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditFAQsPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useFAQQuery(id);
  const [updateFAQ] = useUpdateFAQMutation();

  const onSubmit = async (values: any) => {
    try {
      message.loading("Updating-----");
      const res = await updateFAQ({ id, body: values }).unwrap();

      if (res?.id) {
        message.success("FAQ Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.message);
    }
  };

  const defaultValues = {
    question: data?.question || "",
    answer: data?.answer || "",
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
            label: "FAQs",
            link: "/admin/FAQs",
          },
        ]}
      />
      <ActionBar title="Update FAQ" />
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
              <FormTextArea name="question" label="Question" rows={4} />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="answer" label="Answer" rows={4} />
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

export default EditFAQsPage;
