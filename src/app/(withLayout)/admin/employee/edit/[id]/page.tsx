"use client";

import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import { employeeStatusOptions, genderOptions } from "@/constants/global";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditEmployeePage = ({ params }: IDProps) => {
  const { id } = params;

  //   const { data } = useSingleDepartmentQuery(id);
  //   const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: any) => {
    try {
      message.loading("Updating-----");
      //   await updateDepartment({ id, body: values });
      message.success("Department updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.message);
    }
  };

  //   const defaultValues = {
  //     title: data?.title || "",
  //   };

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "employees",
            link: "/admin/employee",
          },
        ]}
      />
      <ActionBar title="Update Employee" />
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
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="user.lastName"
                size="large"
                label="Last Name"
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
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormSelectField
                placeholder="Select"
                label="Gender"
                size="large"
                name="user.gender"
                options={genderOptions}
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="user.contactNo"
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditEmployeePage;
