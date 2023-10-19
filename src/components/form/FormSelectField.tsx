"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string | boolean;
  // disabled?: boolean
};

type SelectFormProps = {
  options: SelectOptions[] | undefined;
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  required?: boolean;
};

const FormSelectField = ({
  options,
  name,
  size = "large",
  value,
  label,
  defaultValue,
  placeholder,
  required,
}: SelectFormProps) => {
  const { control } = useFormContext();

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
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
