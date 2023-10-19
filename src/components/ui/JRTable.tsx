"use client";

import { Table } from "antd";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  total?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const JRTable = ({
  loading,
  columns,
  dataSource,
  pageSize,
  total,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize,
        total,
        pageSizeOptions: [5, 10, 15],
        showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default JRTable;
