"use client";

import React, { useState } from "react";
import {
  Button,
  Layout,
  Menu,
  MenuProps,
  ConfigProvider,
  Badge,
  Avatar,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
const { Header } = Layout;

const Navbar = () => {
  const userLoggedIn = isLoggedIn();
  const {role} = getUserInfo() as any
  const [current, setCurrent] = useState("home");
  const {services} = useAppSelector(state => state.cart)

  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/");
  };

  const items: MenuProps["items"] = [
    {
      label: "HOME",
      key: "home",
    },
    {
      label: <Link href="/services">SERVICES</Link>,
      key: "service",
    },
    {
      label: "ABOUT US",
      key: "about",
    },
    {
      label: "CONTACT",
      key: "contact",
    },
    {
      label: <Link href="/blogs">BLOG</Link>,
      key: "blog",
    },
    {
      label: <>{userLoggedIn ? <Link href="/profile">DASHBOARD</Link> : null}</>,
      key: "dashboard",
    },
    {
      label: (
        <Link href="/cart">
          <Badge count={services?.length}>
            <Avatar
              shape="circle"
              icon={<ShoppingCartOutlined style={{ fontSize: "17px" }} />}
              size="large"
              gap={1}
            />
          </Badge>
        </Link>
      ),
      key: "cart",
    },
    {
      label: (
        <>
          {userLoggedIn ? (
            <Button
              type="text"
              style={{
                color: "white",
                border: "1px solid white",
                fontSize: "10px",
                fontFamily: `'Tilt Neon', sans-serif`,
                letterSpacing: "3px",
                lineHeight: "0",
              }}
              onClick={logOut}
            >
              LOG OUT
            </Button>
          ) : (
            <Link href="/login">
              <Button
                type="text"
                style={{
                  color: "white",
                  border: "1px solid white",
                  fontSize: "10px",
                  fontFamily: `'Tilt Neon', sans-serif`,
                  letterSpacing: "3px",
                  lineHeight: "0",
                }}
              >
                LOGIN
              </Button>
            </Link>
          )}
        </>
      ),
      key: "login",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            // horizontalItemHoverColor: "#ffffff",
            horizontalItemSelectedColor: "#ffffff",
            itemColor: "#ffffff",
            itemHoverColor: "ffffff",
          },
        },
      }}
    >
      <Header
        style={{
          display: "flex",
          background: "#000",
          letterSpacing: "3px",
          fontFamily: `'Tilt Neon', sans-serif`,
        }}
      >
        <div style={{ color: "white" }}>
          <span>HOME</span>
        </div>
        <Menu
          style={{
            border: "0px",
            flex: "auto",
            minWidth: 0,
            justifyContent: "flex-end",
            background: "#000",
            letterSpacing: "3px",
            fontFamily: `'Tilt Neon', sans-serif`,
            fontSize: "10px",
          }}
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          items={items}
        />
      </Header>
    </ConfigProvider>
  );
};

export default Navbar;
