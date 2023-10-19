"use client";

import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, Select, message } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import JRTable from "@/components/ui/JRTable";
import { useAdminsQuery, useDeleteAdminMutation } from "@/redux/api/adminApi";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import JRModal from "@/components/ui/JRModal";
import { genderOptions } from "@/constants/global";

const ManageAdminPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [gender, setGender] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [adminId, setAdminId] = useState<string>("");

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["gender"] = gender;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteAdmin] = useDeleteAdminMutation();
  const { data, isLoading } = useAdminsQuery({ ...query });
  const admins = data?.admins;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteAdmin(id);
      if (res) {
        message.success("Admin Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: true,
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
      sorter: true,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Action",
      render: (data: any) => {
        return (
          <>
            <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/super_admin/admin/edit/${data.id}`}>
              <Button style={{ margin: "0px 5px" }} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setAdminId(data?.id);
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setGender(null);
  };

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: `super admin`,
            link: `/super_admin`,
          },
        ]}
      />
      <ActionBar title="Admin List">
        <Input
          type="text"
          size="large"
          placeholder="Search.."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          placeholder="Filter with gender"
          style={{ width: 220 }}
          size="large"
          options={genderOptions}
          onChange={(e) => setGender(e)}
        />
        <div>
          <Link href="/super_admin/admin/create">
            <Button type="primary">Create admin</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm || gender) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <JRTable
        loading={isLoading}
        columns={columns}
        dataSource={admins}
        pageSize={pageSize}
        total={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <JRModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(adminId)}
      >
        <p className="my-5">Do you want to remove this admin?</p>
      </JRModal>
    </div>
  );
};

export default ManageAdminPage;
