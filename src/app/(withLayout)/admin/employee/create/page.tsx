"use client";

import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  employeeStatusOptions,
  genderOptions,
} from "@/constants/global";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateEmployeePage = () => {
  //   const [addAdminWithFormData] = useAddAdminWithFormDataMutation();
  //   const { data } = useDepartmentsQuery({ limit: 100, page: 1 });
  //   const departments = data?.departments;

  //   const departmentOptions =
  //     departments &&
  //     departments?.map((department) => {
  //       return {
  //         label: department?.title,
  //         value: department?.id,
  //       };
  //     });

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);

    try {
      message.loading("Creating...");
      //   await addAdminWithFormData(formData);
      message.success("Successfully added");
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
            label: `employees`,
            link: `/admin/employee`,
          },
        ]}
      />
      <h1>Create Employee</h1>
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
            Basic Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="email"
                name="user.email"
                size="large"
                label="Email"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="user.firstName"
                size="large"
                label="First Name"
                required
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="user.lastName"
                size="large"
                label="Last Name"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="password"
                name="user.password"
                size="large"
                label="Password"
                required
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Gender"
                size="large"
                name="user.gender"
                options={genderOptions}
                required={true}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="user.contactNo"
                size="large"
                label="Contact Number"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="user.faceBookIdLink"
                size="large"
                label="Facebook ID"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="user.instaIdLink"
                size="large"
                label="Instagram ID"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="user.whatsAppNumber"
                size="large"
                label="WhatsApp Number"
              />
            </Col>
            <Col
              className="gutter-row"
              span={12}
              style={{ marginBottom: "10px" }}
            >
              <FormTextArea name="user.address" label="Address" rows={4} />
            </Col>
            <Col className="gutter-row" span={8} style={{ marginTop: "15px" }}>
              <UploadImage name="file" />
            </Col>
          </Row>
        </div>

        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Employee Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormDatePicker
                name="employee.hireDate"
                size="large"
                label="Hire Date"
                required={true}
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                name="employee.emergencyContactNumber"
                size="large"
                label="Emergency Contact Number"
                required
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormDatePicker
                name="employee.dateOfBirth"
                size="large"
                label="Date Of Birth"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="number"
                name="employee.salary"
                size="large"
                label="Salary"
                required
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Active Status"
                size="large"
                name="employee.isActive"
                options={employeeStatusOptions}
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

export default CreateEmployeePage;
