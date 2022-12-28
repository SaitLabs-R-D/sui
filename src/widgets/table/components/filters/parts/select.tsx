import React, { useState, useEffect } from "react";
import { Filter, setFilters, Column } from "../../../../../types";
import { Tag } from "../../../../../types";
import { InputSelect } from "../../../../../parts";

export default function SelectFilter({
  setFilter,
  filter,
  columnKey,
  columnOptions,
  ...rest
}: {
  setFilter: setFilters;
  filter: Filter["number"];
  columnKey: string;
  columnOptions: Column["options"];
  rest?: Tag;
}) {
  return (
    <InputSelect
      value={filter?.in?.toString() || ""}
      onChange={(e: any) => {
        setFilter(columnKey, e.target.value);
      }}
      {...rest}
    >
      {columnOptions?.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </InputSelect>
  );
}
