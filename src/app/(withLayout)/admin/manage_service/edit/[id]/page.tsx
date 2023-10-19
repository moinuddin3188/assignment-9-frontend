"use client";

import CategoryField from "@/components/form/CategoryField";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import TagSelectField from "@/components/form/TagFieldSelect";
import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { serviceStatusOptions } from "@/constants/global";
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditServicePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const onSubmit = async (values: any) => {
    if (values["price"]) values["price"] = Number(values["price"]);

    try {
      message.loading("Updating-----");
      const res = await updateService({ id, body: values }).unwrap();

      if (res?.id) {
        message.success("Service Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
    description: data?.description || "",
    tags: data?.tags || "",
    status: data?.status || "",
    price: data?.price || "",
    categoryId: data?.categoryId || "",
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
            label: "services",
            link: "/admin/manage_service",
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
              <FormTextArea name="description" label="Description" rows={4} />
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
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <TagSelectField
                placeholder="Select"
                label="Tags"
                size="large"
                inputName="tags"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Status"
                size="large"
                name="status"
                options={serviceStatusOptions}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <CategoryField label="Category" name="categoryId" />
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

export default EditServicePage;
