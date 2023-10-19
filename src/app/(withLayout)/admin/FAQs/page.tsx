"use client";

import ActionBar from "@/components/ui/ActionBar";
import JRBreadcrumb from "@/components/ui/JRBreadcrumb";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import JRTable from "@/components/ui/JRTable";
// import { useAdminsQuery, useDeleteAdminMutation } from "@/redux/api/adminApi";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import { useDeleteFAQMutation, useFAQsQuery } from "@/redux/api/faqsApi";
import JRModal from "@/components/ui/JRModal";

const FAQsPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [faqId, setFaqId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteFAQ] = useDeleteFAQMutation();
  const { data, isLoading } = useFAQsQuery({ ...query });
  const faqs = data?.FAQs;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteFAQ(id);
      if (res) {
        message.success("FAQ Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      render: function (data: any) {
        return data?.length > 50 ? data.substring(0, 50) + '...' : data;
      },
    },
    {
      title: "Answer",
      dataIndex: "answer",
      render: function (data: any) {
        return data && data.substring(0, 50) + '...';
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
            <Link href={`/admin/FAQs/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/FAQs/edit/${data.id}`}>
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
                setFaqId(data?.id);
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
      <ActionBar title="FAQs List">
        <Input
          type="text"
          size="large"
          placeholder="Search.."
          style={{ width: "20%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/admin/FAQs/create">
            <Button type="primary">Create FAQ</Button>
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
        dataSource={faqs}
        pageSize={pageSize}
        total={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <JRModal
        title="Remove FAQ"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(faqId)}
      >
        <p className="my-5">Do you want to remove this FAQ?</p>
      </JRModal>
    </div>
  );
};

export default FAQsPage;
