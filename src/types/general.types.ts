export type TSidebarLink = {
  title: string;
  icon: JSX.Element;
  path: string;
};
export type TDropdownData = {
  value: string;
  label: string;
};

export type TProppertyStatusData = Omit<TDropdownData, "value"> & {
  value: "" | "sale" | "rent";
};

export type TProppertyTypeData = Omit<TDropdownData, "value"> & {
  value: "" | "apartment" | "houses" | "commercial" | "garages" | "lots";
};

export type TFilter = {
  text?: string;
  status: TProppertyStatusData["value"];
  country?: string;
  type?: TProppertyTypeData["value"];
  state?: string;
  offset?: number;
  limit?: number;
};
