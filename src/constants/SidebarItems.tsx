import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const SidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/admin/manage_user`}>Manage Users</Link>,
      icon: <TableOutlined />,
      key: `/admin/manage-user`,
    },
    {
      label: <Link href={`/admin/manage_service`}>Manage Service</Link>,
      icon: <TableOutlined />,
      key: `/admin/manage-service`,
    },
    {
      label: <Link href={`/admin/category`}>Category</Link>,
      icon: <TableOutlined />,
      key: `/admin/category`,
    },
    {
      label: <Link href={`/admin/manage_booking`}>Manage Bookings</Link>,
      icon: <TableOutlined />,
      key: `/admin/manage-booking`,
    },
    {
      label: "Content Management",
      key: "content-management",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/admin/blog`}>Blogs</Link>,
          key: `/admin/blog`,
        },
        {
          label: <Link href={`/admin/FAQs`}>FAQs</Link>,
          key: `/admin/faqs`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/super_admin/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/super_admin/admin`,
    },
  ];

  const employeeSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/employee/courses`}>Anointments</Link>,
      icon: <TableOutlined />,
      key: `/employee/courses`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/dashboard/my_bookings`}>My Bookings</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/my_bookings`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.EMPLOYEE) return employeeSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
