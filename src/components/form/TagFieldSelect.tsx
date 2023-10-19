"use client";

import { Button, Divider, Input, Select, Space } from "antd";
import { useState, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  inputName: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  required?: boolean;
};

let index = 0;

const TagSelectField = ({
  inputName,
  size = "large",
  value,
  placeholder = "select",
  label,
  defaultValue,
  required,
}: SelectFieldProps) => {
  const [items, setItems] = useState(["Ring"]);
  const [name, setName] = useState("");
  const inputRef = useRef<InputRef>(null);

  const { control } = useFormContext();

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <>
      {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}
      <Controller
        control={control}
        name={inputName}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
            allowClear
            mode="multiple"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: "8px 0" }} />
                <Space style={{ padding: "0 8px 4px" }}>
                  <Input
                    placeholder="Please enter item"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    Add item
                  </Button>
                </Space>
              </>
            )}
            options={items.map((item) => ({ label: item, value: item }))}
          />
        )}
      />
    </>
  );
};

export default TagSelectField;
