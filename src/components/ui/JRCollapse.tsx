import { Collapse } from "antd";
const { Panel } = Collapse;

export type ItemProps = {
  key: string;
  label: string;
  children: React.ReactNode | React.ReactElement;
};

type JRCollapseProps = {
  items: ItemProps[];
  onChange?: (el: string | string[] | "") => void;
  defaultActiveKey?: string | string[];
};

const JRCollapse = ({
  items,
  onChange,
  defaultActiveKey = ["1"],
}: JRCollapseProps) => {
  return (
    <Collapse defaultActiveKey={defaultActiveKey} items={items} onChange={onChange} />
  );
};

export default JRCollapse;