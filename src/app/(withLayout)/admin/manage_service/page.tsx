"use client";

import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Badge, Button, Input, Select, message } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import JRTable from "@/components/ui/JRTable";
// import { useAdminsQuery, useDeleteAdminMutation } from "@/redux/api/adminApi";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/serviceApi";
import { ICategory } from "@/types";
import JRModal from "@/components/ui/JRModal";
import { serviceStatusOptions } from "@/constants/global";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

const ManageServicePage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<any>(null);
  const [status, setStatus] = useState<any>(null);

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["categoryId"] = categoryId;
  query["status"] = status;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteService] = useDeleteServiceMutation();
  const { data, isLoading } = useServicesQuery({ ...query });
  const services = data?.services;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteService(id);
      if (res) {
        message.success("User Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: function (data: any) {
        return data?.length > 50 ? data.substring(0, 50) + '...' : data;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: function (data: any) {
        return (
          <Badge
            count={data}
            style={{
              backgroundColor:
                data === "AVAILABLE"
                  ? "#52C41A"
                  : data === "COMING SOON"
                  ? "#1677ff"
                  : "#faad14",
            }}
          />
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      render: function (data: ICategory) {
        console.log(data);
        return <>{data?.title}</>;
      },
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
      title: "Action",
      render: (data: any) => {
        return (
          <>
            <Link href={`/admin/manage_service/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/manage_service/edit/${data.id}`}>
              <Button
                style={{ margin: "0px 5px" }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setServiceId(data?.id);
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
    setCategoryId(null);
    setStatus(null);
  };

  //select field options
  const { data: categoryData } = useCategoriesQuery({
    limit: 100,
    page: 1,
  });

  const categories = categoryData?.categories;
  const categoriesOptions = categories?.map((category: any) => {
    console.log(category?.id);
    return {
      label: category?.title,
      value: category?.id,
    };
  });

  return (
    <div>
      <JRBreadcrumb
        items={[
          {
            label: `admin`,
            link: `/admin`,
          },
        ]}
      />
      <ActionBar title="Service List">
        <Input
          type="text"
          size="large"
          placeholder="Search.."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          placeholder="Filter with status"
          style={{ width: 220 }}
          size="large"
          options={serviceStatusOptions}
          onChange={(e) => setStatus(e)}
        />
        <Select
          placeholder="Filter with category"
          style={{ width: 220 }}
          size="large"
          options={categoriesOptions}
          onChange={(e) => setCategoryId(e)}
        />
        <div>
          <Link href="/admin/manage_service/create">
            <Button type="primary">Create service</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm || status || categoryId) && (
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
        dataSource={services}
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
        handleOk={() => deleteHandler(serviceId)}
      >
        <p className="my-5">Do you want to remove this service?</p>
      </JRModal>
    </div>
  );
};

export default ManageServicePage;
