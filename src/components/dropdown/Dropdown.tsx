import { Menu } from "@headlessui/react";
import React from "react";
import { TDropdownData, TProppertyStatusData } from "../../types/general.types";

interface DropdownProps<TData> {
  selected?: string;
  data?: TData[];
  // onClick?: (value: TData) => void;
  renderItems?: (item: TData) => React.ReactNode;
}

const Dropdown = <TData,>(props: DropdownProps<TData>) => {
  const { selected, renderItems, data = [] } = props;
  return (
    <Menu as="div" className="relative basis-[160px]">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center justify-between p-2.5 rounded-lg bg-grayf7 gap-2.5 w-full text-xs font-medium">
            <span>{selected}</span>
            <span
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.175736 0.681116C0.41005 0.439628 0.789949 0.439628 1.02426 0.681116L4.5 4.26326L7.97574 0.681115C8.21005 0.439627 8.58995 0.439626 8.82426 0.681115C9.05858 0.922603 9.05858 1.31413 8.82426 1.55562L5.34853 5.13777C4.8799 5.62074 4.1201 5.62074 3.65147 5.13777L0.175736 1.55562C-0.0585785 1.31413 -0.0585786 0.922604 0.175736 0.681116Z"
                  fill="#808191"
                />
              </svg>
            </span>
          </Menu.Button>
          <Menu.Items
            as="div"
            className="absolute left-0 right-0 z-10 rounded-lg top-full bg-grayfc shadow-dropdown"
          >
            {data.length > 0 && data.map((item) => renderItems?.(item))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export const DropdownItem = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Menu.Item
      as="div"
      className="p-2 text-sm font-medium rounded-lg cursor-pointer text-gray80 hover:text-grayfc hover:bg-primary"
      onClick={onClick}
    >
      {children}
    </Menu.Item>
  );
};

export default Dropdown;
