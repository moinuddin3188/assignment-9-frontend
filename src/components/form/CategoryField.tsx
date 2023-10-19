import FormSelectField, { SelectOptions } from "./FormSelectField";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
  required?: boolean;
};

const CategoryField = ({ name, label, required }: ACDepartmentFieldProps) => {
  const { data, isLoading } = useCategoriesQuery({
    limit: 100,
    page: 1,
  });

  const categories = data?.categories;
  const categoriesOptions = categories?.map((category: any) => {
    console.log(category?.id);
    return {
      label: category?.title,
      value: category?.id,
    };
  });

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
      <FormSelectField
        name={name}
        label={label}
        options={categoriesOptions as SelectOptions[]}
      />
    </>
  );
};

export default CategoryField;
