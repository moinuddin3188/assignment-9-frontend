import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

type Items = {
  items: {
    label: React.ReactNode | React.ReactElement;
    link: string;
  }[];
};

const JRBreadcrumb = ({ items }: Items) => {
  const breadcrumbItems = [
    {
      title: (
        <Link href="/">
          {" "}
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}> {item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return (
    <Breadcrumb items={breadcrumbItems} style={{ marginBottom: "15px" }}>
      UMBreadcrumb
    </Breadcrumb>
  );
};

export default JRBreadcrumb;
