"use client";

import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface UMDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
  required?: boolean;
}

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
  required,
}: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
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
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            onChange={handleOnChange}
            placeholder="Select date"
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
