import React from "react";
import { Tag } from "./tag";

export interface TableHook {
  columns: Column[];
  rows: Row[];
  config: TableConfig;
}

export interface Column {
  key: string;
  label: string;
  type: ColumnTypes;
  options?: string[];
  actions?: Action[];
  colors?: string[];
}

export interface Action {
  type: ActionTypes;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
}

export type ActionMethods = "GET" | "POST" | "PUT" | "DELETE";

export type ActionEvents = React.ChangeEvent<HTMLInputElement>;

export type ActionTypes = "onClick" | "onChange" | "href";

export type ColumnTypes =
  | "status"
  | "string"
  | "number"
  | "boolean"
  | "date"
  | "link"
  | "select"
  | "input"
  | "button"
  | "checkbox"
  | "icon"
  | "datalist";

export interface Row {
  // todo: make each key the typeof columns[i].key
  [key: string]: RowValue;
}

export type RowValue = string | number | boolean;

export interface TableConfig {
  custom?: {
    [key: string]: string;
  };

  cta?: TableConfigBtn;
  export?: TableConfigBtn;

  resetFilters?: boolean;
  sortable?: string[];
  filterable?: string[];
  sticky?: string;
}

export interface TableConfigBtn {
  label: string;
  action: Action;
}

export interface TableState {
  filters: Filter;
  sort: string; // "+key" or "-key"
  page: number;
  amount: number; // amount of rows per page
}

export interface Filter {
  /**
   * "created": {
   *  "gte": "2020-01-01",
   *  "lte": "2020-01-31"
   * }
   */
  [key: string]: {
    [Property in keyof FilterOperators as FilterOperators]?: FilterValue;
  };
}

export type ApiFilters = ApiFilter[];
export interface ApiFilter {
  field: string;
  operator: FilterOperators;
  value: FilterValue;
}

export type FilterValue = string | number | boolean | undefined;

export type FilterOperators =
  | "in" // includes, only for lists
  | "eq" // equals, for integers - fullmatch, for strings - contains
  | "gte" // greater-than only for numbers & dates
  | "lte"; // only for numbers & dates

export type setFilters = (
  field: string,
  value: FilterValue,
  operator?: FilterOperators
) => void;

export interface useTableProps {
  columns: Column[];
  config: TableConfig;
  getRows: getRowsArgs;
}

export type getRowsArgs = ({
  page,
  amount,
  sort,
  filters,
}: {
  page: number;
  amount: number;
  sort: string;
  filters: ApiFilters;
}) => Promise<{
  rows: Row[];
  total: number;
}>;

export interface RenderCellProps extends Tag {
  row: Row;
  column: Column;
  sticky?: boolean;
  events: any;
}

export interface RenderHeadCellProps extends Tag {
  sortable?: boolean;
  onSort?: () => void;
  sticky?: boolean;
}
