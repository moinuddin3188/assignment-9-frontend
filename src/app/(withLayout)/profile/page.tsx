"use client";

import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { genderOptions } from "@/constants/global";
import { getCloudinaryUrl, getPresetKey } from "@/helpers/config/envConfig";
import {
  useProfileQuery,
  useUpdateAdminProfileMutation,
  useUpdateSuperAdminProfileMutation,
  useUpdateUserProfileMutation,
} from "@/redux/api/profileApi";
import { Button, Col, Row, message } from "antd";
import axios from "axios";

const ProfilePage = () => {
  const { data } = useProfileQuery({});
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [updateAdminProfile] = useUpdateAdminProfileMutation();
  const [updateSuperAdminProfile] = useUpdateSuperAdminProfileMutation();

  const onAccountDetailSubmit = async (values: any) => {
    try {
      if (data?.role === "admin") {
        const res = await updateAdminProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
      if (data?.role === "user") {
        const res = await updateUserProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
      if (data?.role === "super_admin") {
        const res = await updateSuperAdminProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
    } catch (error) {
      error && message.error("Failed");
    }
  };

  const onProfileImageSubmit = async (values: any) => {
    const cloudinaryUrl = getCloudinaryUrl();
    const presetKey = getPresetKey();

    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    obj["price"] = Number(obj["price"]);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);

    await axios
      .post(cloudinaryUrl, formData)
      .then((res) => {
        obj.profile = res.data?.secure_url;
      })
      .catch((err) => {
        console.error("Error uploading file:", err.message);
        // You can also check err.response for more details
      });

    try {
      if (!obj["profile"]) {
        message.error("failed");
      } else {
        if (data?.role === "admin") {
          const res = await updateAdminProfile({ ...values }).unwrap();
          res?.id && message.success("Updated");
        }
        if (data?.role === "user") {
          const res = await updateUserProfile({ ...values }).unwrap();
          res?.id && message.success("Updated");
        }
        if (data?.role === "super_admin") {
          const res = await updateSuperAdminProfile({ ...values }).unwrap();
          res?.id && message.success("Updated");
        }
      }
    } catch (error) {
      error && message.error("Failed");
    }
  };

  const onBasicInfoSubmit = async (values: any) => {
    try {
      if (data?.role === "admin") {
        const res = await updateAdminProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
      if (data?.role === "user") {
        const res = await updateUserProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
      if (data?.role === "super_admin") {
        const res = await updateSuperAdminProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
    } catch (error) {
      error && message.error("Failed");
    }
  };

  const onSocialMediaSubmit = async (values: any) => {
    try {
      if (data?.role === "admin") {
        const res = await updateAdminProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
      if (data?.role === "user") {
        const res = await updateUserProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
      if (data?.role === "super_admin") {
        const res = await updateSuperAdminProfile({ ...values }).unwrap();
        res?.id && message.success("Updated");
      }
    } catch (error) {
      error && message.error("Failed");
    }
  };

  const onChangePasswordSubmit = async (values: any) => {};

  const accountDetailsDefault = {
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    email: data?.email || "",
  };

  const basicInfoDefault = {
    gender: data?.gender || "",
    contactNo: data?.contactNo || "",
    address: data?.address || "",
  };

  const socialMediaDefault = {
    faceBookIdLink: data?.faceBookIdLink || "",
    instaIdLink: data?.instaIdLink || "",
    whatsAppNumber: data?.whatsAppNumber || "",
  };

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: `Profile`,
            link: ``,
          },
        ]}
      />
      <h1>Welcome to profile</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* -------- Account info ---------- */}
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Account Details
            </p>
            <Form
              submitHandler={onAccountDetailSubmit}
              defaultValues={accountDetailsDefault}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="firstName"
                    size="large"
                    label="First Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="lastName"
                    size="large"
                    label="Last Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="email"
                    name="email"
                    size="large"
                    label="Email"
                    disabled
                  />
                </Col>
              </Row>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{ backgroundColor: "#dd4026" }}
              >
                Save Changes
              </Button>
            </Form>
          </div>
        </Col>

        {/* --------- Profile image------ */}
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Profile Image
            </p>
            <Form submitHandler={onProfileImageSubmit}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={6}
                  style={{ marginTop: "15px" }}
                >
                  <UploadImage name="file" />
                </Col>
                <Col
                  className="gutter-row"
                  span={16}
                  style={{ marginBottom: "10px" }}
                >
                  <p>
                    <small>Format: JPG or PNG</small>
                  </p>
                  <p>
                    <small>File size: Under 2 MB</small>
                  </p>
                  <p>
                    <small>Dimensions: At least 300 x 300 pixels</small>
                  </p>
                </Col>
              </Row>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{ backgroundColor: "#dd4026" }}
              >
                Save Changes
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* ------- Basic info -------- */}
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Basic Information
            </p>
            <Form
              submitHandler={onBasicInfoSubmit}
              defaultValues={basicInfoDefault}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormSelectField
                    name="gender"
                    size="large"
                    label="Gender"
                    options={genderOptions}
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="contactNo"
                    size="large"
                    label="Contact Number"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ marginBottom: "10px" }}
                >
                  <FormTextArea name="address" label="Address" rows={4} />
                </Col>
              </Row>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{ backgroundColor: "#dd4026" }}
              >
                Save Changes
              </Button>
            </Form>
          </div>
        </Col>

        {/* ----------- Social media info ---------- */}
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Social Media Information
            </p>
            <Form
              submitHandler={onSocialMediaSubmit}
              defaultValues={socialMediaDefault}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faceBookIdLink"
                    size="large"
                    label="Facebook ID"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="instaIdLink"
                    size="large"
                    label="Instagram ID"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="whatsAppNumber"
                    size="large"
                    label="WhatsApp Number"
                  />
                </Col>
              </Row>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{ backgroundColor: "#dd4026" }}
              >
                Save Changes
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* ------- Change passowrd -------- */}
        <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Change Password
            </p>
            <Form submitHandler={onChangePasswordSubmit}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="password"
                    name="previousPassword"
                    size="large"
                    label="Previous Password"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="password"
                    name="newPassword"
                    size="large"
                    label="New Password"
                  />
                </Col>
              </Row>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{ backgroundColor: "#dd4026" }}
              >
                Change Password
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
