import React from "react";
import { Column, Filter, setFilters } from "../../../../types";
import * as Filters from "./parts";

interface TableFiltersProps {
  columns: Column[];
  setFilters: setFilters;
  filters: Filter;
  filterable?: string[];
}

export default function TableFilters({
  columns,
  filterable,
  setFilters,
  filters,
}: TableFiltersProps) {
  const renderFilter = (column: Column) => {
    if (!filterable || !filterable.includes(column.key)) return null;

    switch (column.type) {
      case "string":
      case "input":
      case "link":
      case "status":
        return (
          <Filters.TextFilter
            key={column.key}
            column={column}
            setFilter={setFilters}
            filter={filters[column.key]}
          />
        );
      case "number":
        return (
          <Filters.TextFilter
            key={column.key}
            column={column}
            setFilter={setFilters}
            filter={filters[column.key]}
          />
        );
      case "date":
        return (
          <Filters.DateFilter
            key={column.key}
            columnKey={column.key}
            setFilter={setFilters}
            filter={filters[column.key]}
          />
        );
      case "select":
        return (
          <Filters.SelectFilter
            key={column.key}
            columnKey={column.key}
            columnOptions={column.options}
            setFilter={setFilters}
            filter={filters[column.key]}
          />
        );
    }
  };

  return <div className="d-flex gap-10 ">{columns.map(renderFilter)}</div>;
}
