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
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import JRModal from "@/components/ui/JRModal";
import {
  useCategoriesQuery,
  useDeleteCategoryMutation,
} from "@/redux/api/categoryApi";

const CategoryPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<string>("");

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteCategory] = useDeleteCategoryMutation();
  const { data, isLoading } = useCategoriesQuery({ ...query });
  const categories = data?.categories;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteCategory(id).unwrap();
      console.log(res)
      if (res) {
        message.success("Category Successfully Deleted!");
        setOpen(false);
      } else {
        message.warning("This category has Service Included! First delete Those Services");
        setOpen(false)
      }
    } catch (error: any) {
      console.log(error)
      error && message.error("Failed");
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
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
      title: "Updated at",
      dataIndex: "updatedAt",
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
            <Link href={`/admin/category/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/category/edit/${data.id}`}>
              <Button style={{ margin: "0px 5px" }} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setCategoryId(data?.id);
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
  };

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
      <ActionBar title="Category List">
        <Input
          type="text"
          size="large"
          placeholder="Search.."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/admin/category/create">
            <Button type="primary">Create category</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
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
        dataSource={categories}
        pageSize={pageSize}
        total={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <JRModal
        title="Remove Category"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(categoryId)}
      >
        <p className="my-5">Do you want to remove this category?</p>
      </JRModal>
    </div>
  );
};

export default CategoryPage;
