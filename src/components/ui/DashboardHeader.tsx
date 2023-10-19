import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useProfileQuery } from "@/redux/api/profileApi";

const { Header: AntHeader, Content, Footer } = Layout;

const DashboardHeader = () => {
  const router = useRouter();
  const { data } = useProfileQuery({});

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ background: "#fff" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" src={data?.profile} icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default DashboardHeader;
