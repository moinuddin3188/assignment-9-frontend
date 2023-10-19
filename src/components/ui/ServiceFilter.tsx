"use client";

import { Button, Col, Flex, Slider, Tag } from "antd";
import React, { useState } from "react";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useAppDispatch } from "@/redux/hooks";
import {
  addCategory,
  addMaxPrice,
  addMinPrice,
  addTag,
  removeFilter,
} from "@/redux/slices/serviceFilterSlice";

const filterTags: string[] = [
  "Ring",
  "Watch",
  "Cleaning",
  "Chain",
  "Stone",
  "Bracelet",
  "Earring",
  "Clasp",
];

const ServiceFilter = () => {
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(4000);

  const onAfterChange = (value: number[]) => {
    setMinPrice(value[0] as number);
    setMaxPrice(value[1] as number);
  };

  const { data } = useCategoriesQuery({});
  const categories = data?.categories;

  const filterByPrice = () => {
    dispatch(addMinPrice(minPrice));
    dispatch(addMaxPrice(maxPrice));
  };

  return (
    <Col className="gutter-row" span={6}>
      <Button
        onClick={() => dispatch(removeFilter())}
        type="primary"
        style={{ backgroundColor: "#dd4026", borderRadius: "0", width: "100%" }}
      >
        REMOVE FILTERS
      </Button>
      <h2 style={{ fontFamily: "Crimson Text", fontStyle: "italic" }}>
        Filter By Price
      </h2>
      <Slider
        range
        step={1}
        max={5000}
        defaultValue={[0, 4000]}
        onAfterChange={onAfterChange}
        styles={{
          track: {
            background: "transparent",
          },
          tracks: {
            backgroundColor: "#dd4026",
          },
        }}
      />
      <Flex justify="space-between" align="center">
        <Button
          onClick={filterByPrice}
          type="primary"
          style={{ backgroundColor: "#dd4026", borderRadius: "0" }}
        >
          FILTER
        </Button>
        <p style={{ fontSize: "0.8rem" }}>
          Price: {minPrice} tk - {maxPrice} tk
        </p>
      </Flex>

      <h2
        style={{
          fontFamily: "Crimson Text",
          fontStyle: "italic",
          marginTop: "30px",
        }}
      >
        Browse Categories:
      </h2>
      <div
        style={{
          fontFamily: `'Tilt Neon', sans-serif`,
          fontSize: "0.61rem",
          letterSpacing: "1px",
          color: "#2a2a2a",
          cursor: "pointer",
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        {categories?.map((category) => (
          <p
            key={category.id}
            onClick={() => {
              dispatch(addCategory(category.id));
            }}
          >
            {category.title}
          </p>
        ))}
      </div>

      <h2
        style={{
          fontFamily: "Crimson Text",
          fontStyle: "italic",
          marginTop: "30px",
        }}
      >
        Tags:
      </h2>
      <Flex wrap="wrap" gap="small">
        {filterTags.map((tag, index) => (
          <Tag
            onClick={() => dispatch(addTag(tag))}
            key={index}
            style={{
              borderRadius: "0",
              background: "transparent",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            {tag}
          </Tag>
        ))}
      </Flex>
    </Col>
  );
};

export default ServiceFilter;
