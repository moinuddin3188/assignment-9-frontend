"use client";

import Footer from "@/components/ui/Footer";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import Navbar from "@/components/ui/Navbar";
import { Button, Flex, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slices/cartSlice";

const CartPage = () => {
  const dispatch = useAppDispatch()
  const {services} = useAppSelector((state) => state.cart)

  const columns = [
    {
      title: "View",
      dataIndex: "imageUrl",
      render: function (data: string) {
        return <img src={data} alt="" width="50px" height="50px" />;
      },
    },
    {
      title: "Service",
      dataIndex: "title",
      render: (data: string) => {
        return data?.length > 50 ? data.substring(0, 50) + '...' : data;
      }
    },
    {
      title: "Price",
      dataIndex: "price",
      render: function (data: any) {
        return <>{data} Tk</>;
      },
    },
    {
      title: "Action",
      render: (data: any) => {
        return (
          <>
            <Button
              onClick={() => dispatch(removeFromCart(data))}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
            <Button
              // onClick={() => deleteHandler(data?.id)}
              type="primary"
              style={{marginLeft: "10px"}}
            >
              BOOK THIS SERVICE
            </Button>
          </>
        );
      },
    },
  ];

  const dataSource = [
    {
      imageUrl: "/product-1.jpg",
      title: "Product title will show here",
      price: 400
    },
  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#F7F8FC",
          padding: "2.85em 3rem 3.25em 3rem",
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            fontFamily: "Crimson Text",
            fontSize: "2.66rem",
            fontWeight: "600",
            letterSpacing: "3px",
            textAlign: "center",
          }}
        >
          cart
        </h1>
        <Flex justify="center" style={{ fontFamily: "Crimson Text" }}>
          <JRBreadcrumb
            items={[
              {
                label: <span style={{ color: "#DD4026" }}>SERVICES</span>,
                link: `/services`,
              },
              {
                label: <span>CART</span>,
                link: "",
              },
            ]}
          />
        </Flex>
      </div>

      <section style={{ padding: "0 200px", marginTop: "50px" }}>
        <Table pagination={false} columns={columns} dataSource={services} />
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
