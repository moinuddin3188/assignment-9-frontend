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
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import { useBlogsQuery, useDeleteBlogMutation } from "@/redux/api/blogApi";
import JRModal from "@/components/ui/JRModal";
import { serviceStatusOptions } from "@/constants/global";

const BlogPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [blogId, setBlogId] = useState<string>("");
  const [status, setStatus] = useState<any>(null);

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["status"] = status;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteBlog] = useDeleteBlogMutation();
  const { data, isLoading } = useBlogsQuery({ ...query });
  const blogs = data?.blogs;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteBlog(id);
      if (res) {
        message.success("Blog Successfully Deleted!");
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
        return data?.length > 50 ? data.substring(0, 50) + "..." : data;
      },
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Publish Date",
      dataIndex: "publishDate",
      render: function (data: any) {
        return data ? (
          dayjs(data).format("MMM D, YYYY hh:mm A")
        ) : (
          <Badge count={"Not Published"} />
        );
      },
      sorter: true,
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
                data === "PUBLISHED"
                  ? "#52C41A"
                  : data === "PENDING"
                  ? "#1677ff"
                  : "#faad14",
            }}
          />
        );
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        console.log(data)
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: (data: any) => {
        return (
          <>
            <Link href={`/admin/blog/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/blog/edit/${data.id}`}>
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
                setBlogId(data?.id);
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
    setStatus(null);
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
      <ActionBar title="Blog List">
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
        <div>
          <Link href="/admin/blog/create">
            <Button type="primary">Create blog</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm || status) && (
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
        dataSource={blogs}
        pageSize={pageSize}
        total={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <JRModal
        title="Remove Blog"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(blogId)}
      >
        <p className="my-5">Do you want to remove this Blog?</p>
      </JRModal>
    </div>
  );
};

export default BlogPage;
