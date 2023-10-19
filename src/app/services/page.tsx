"use client";

import Footer from "@/components/ui/Footer";
import JRButton from "@/components/ui/JRButton";
import Navbar from "@/components/ui/Navbar";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceFilter from "@/components/ui/ServiceFilter";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { useAppSelector, useDebounced } from "@/redux/hooks";
import {
  Badge,
  Card,
  Col,
  Flex,
  Input,
  Pagination,
  PaginationProps,
  Row,
  Slider,
  Space,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";

const ServicePage = () => {
  const { tag, maxPrice, minPrice, category, isRemoved } = useAppSelector(
    (state) => state.serviceFilters
  );
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["page"] = page;
  query["limit"] = pageSize;
  query["categoryId"] = category;
  query["tags"] = [tag];
  query["minPrice"] = minPrice;
  query["maxPrice"] = maxPrice;

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  useEffect(() => {
    isRemoved && setSearchTerm("");
    query["searchTerm"] = searchTerm;
  }, [isRemoved]);

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPageSize(pageSize);
  };

  const { data, isLoading } = useServicesQuery({ ...query });
  const services = data?.services;
  const meta = data?.meta;

  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "0 200px", marginTop: "30px" }}>
        <Flex justify="center">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search a service...."
            size="large"
            style={{ width: "70%" }}
          />
        </Flex>
        {query["searchTerm"] && (
          <Flex justify="center">
            <div
              style={{
                textAlign: "center",
                fontFamily: `'Tilt Neon', sans-serif`,
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#444",
                  marginBottom: "0",
                }}
              >
                Search Result For{" "}
                <span style={{ fontStyle: "italic", color: "#dd4026" }}>
                  {query["searchTerm"]}
                </span>
              </p>
              <p style={{ fontSize: "13px", marginTop: "0" }}>
                Total Found : {meta?.total}
              </p>
            </div>
          </Flex>
        )}
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginTop: "50px" }}
        >
          <ServiceFilter />
          <Col
            className="gutter-row"
            span={16}
            style={{ borderLeft: "1px solid #DDD" }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {services?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </Row>
            <Flex justify="center" style={{ marginTop: "15px" }}>
              <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={page}
                total={meta?.total}
                onChange={(e) => setPage(Number(e))}
              />
            </Flex>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
