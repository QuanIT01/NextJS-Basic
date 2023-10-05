export type TSidebarLink = {
  title: string;
  icon: JSX.Element;
  path: string;
};
export type TDropdownData = {
  value: string;
  label: string;
};

export type TProperStatus = "sale" | "rent" | "";

export type TFilter = {
  text?: string;
  status: TProperStatus;
  country?: string;
  type?: string;
  state?: string;
};
