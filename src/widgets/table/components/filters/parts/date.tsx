import { InputDate } from "../../../../../parts";
import { Filter, setFilters } from "../../../../../types";

export default function DateFilter({
  setFilter,
  filter,
  columnKey,
}: {
  setFilter: setFilters;
  filter: Filter["number"];
  columnKey: string;
}) {
  return (
    <div className="d-flex gap-10">
      <label>From</label>
      <InputDate
        type="date"
        value={filter?.gte?.toString() || ""}
        onChange={(e: any) => setFilter(columnKey, e.target.value, "gte")}
        max={filter?.lte?.toString() || ""}
      />
      <label>To</label>
      <InputDate
        type="date"
        value={filter?.lte?.toString() || ""}
        onChange={(e: any) => setFilter(columnKey, e.target.value, "lte")}
        min={filter?.gte?.toString() || ""}
      />
    </div>
  );
}
