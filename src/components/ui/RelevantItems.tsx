"use client"

import { Row } from "antd";
import React from "react";
import RelevantItemsCard from "./RelevantItemsCard";
import { useServicesQuery } from "@/redux/api/serviceApi";

const RelevantItems = ({tags}: {tags: string[]}) => {
  const {data} = useServicesQuery({tags: tags, page: 1, limit: 4})
  const services = data?.services

  return (
    <section
      style={{
        padding: "0 200px",
        marginTop: "50px",
        fontFamily: "Crimson Text",
      }}
    >
      <h1
        style={{ fontStyle: "italic", textAlign: "center", fontSize: "2.77em" }}
      >
        Related Services
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {services?.map(service => <RelevantItemsCard key={service.id} service={service} />) }
      </Row>
    </section>
  );
};

export default RelevantItems;
