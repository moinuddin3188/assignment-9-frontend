"use client";

import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { genderOptions } from "@/constants/global";
import {
  useCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/userApi";
// import {
//   useSingleDepartmentQuery,
//   useUpdateDepartmentMutation,
// } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditCategoryPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useCategoryQuery(id);
  const [updateCategory] = useUpdateCategoryMutation();

  const onSubmit = async (values: any) => {
    try {
      message.loading("Updating-----");
      const res = await updateCategory({ id, body: values }).unwrap();

      if (res?.id) {
        message.success("Category Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
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
            label: "category",
            link: "/admin/category",
          },
        ]}
      />
      <ActionBar title="Update Category" />
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
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput type="text" name="title" size="large" label="Title" />
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

export default EditCategoryPage;
