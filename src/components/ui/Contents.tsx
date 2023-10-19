"use client";

import { Layout } from "antd";
import DashboardHeader from "./DashboardHeader";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <DashboardHeader />
      <div
        style={{
          padding: "20px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;