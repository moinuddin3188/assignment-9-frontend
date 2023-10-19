"use client";

import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { genderOptions, userRoleOptions } from "@/constants/global";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/userApi";
// import {
//   useSingleDepartmentQuery,
//   useUpdateDepartmentMutation,
// } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditUserPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (values: any) => {
    try {
      message.loading("Updating-----");
      const res = await updateUser({ id, body: values }).unwrap();

      if (res?.id) {
        message.success("User Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.message);
    }
  };

  const defaultValues = {
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    email: data?.email || "",
    gender: data?.gender || "",
    contactNo: data?.contactNo || "",
    faceBookIdLink: data?.faceBookIdLink || "",
    instaIdLink: data?.instaIdLink || "",
    whatsAppNumber: data?.whatsAppNumber || "",
    address: data?.address || "",
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
            label: "users",
            link: "/admin/manage_user",
          },
        ]}
      />
      <ActionBar title="Update User" />
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
              <FormInput type="email" name="email" size="large" label="Email" />
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
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="lastName"
                size="large"
                label="Last Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Gender"
                size="large"
                name="gender"
                options={genderOptions}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="contactNo"
                size="large"
                label="Contact Number"
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
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="whatsAppNumber"
                size="large"
                label="WhatsApp Number"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormSelectField
                placeholder="Select"
                label="Role"
                size="large"
                name="role"
                options={userRoleOptions}
              />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="address" label="Address" rows={4} />
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

export default EditUserPage;
