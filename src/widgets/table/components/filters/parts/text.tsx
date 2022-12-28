import { InputText } from "../../../../../parts";
import { Column, Filter, setFilters, Tag } from "../../../../../types";

export default function TextFilter({
  setFilter,
  filter,
  column,
  ...rest
}: {
  setFilter: setFilters;
  filter: Filter["number"];
  column: Column;
  rest?: Partial<Tag>;
}) {
  return (
    <InputText
      value={filter?.eq?.toString() || ""}
      onChange={(e: any) => setFilter(column.key, e.target.value)}
      placeholder={column.label}
      {...rest}
    />
  );
}
