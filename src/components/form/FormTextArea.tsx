"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface ITextAreaProps {
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  rows?: number;
  required?: boolean;
}

const FormTextArea = ({
  name,
  validation,
  value,
  placeholder,
  id,
  label,
  rows,
  required,
}: ITextAreaProps) => {
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
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
