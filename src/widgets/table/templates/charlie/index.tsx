import React from "react";
import {
  Table,
  Thead,
  Tbody,
  RenderCell,
  RenderHeadCell,
  Tr,
  TableLayout,
  TableFilters,
  useTable,
} from "../../";
import { useTableProps } from "../../../../types";
import { Pagination } from "../../../pagination";
import { CharlieSorter } from "../../components/sorters";
import { Button } from "../../../../parts";

export default function TableCharlie({
  getRows,
  columns,
  config,
}: useTableProps) {
  const table = useTable({
    getRows,
    columns,
    config,
  });

  return (
    <TableLayout className="--charlie">
      {/* ! temporary ! */}
      <div className="d-flex justify-content-space-between mt-10 flex-wrap">
        <div className="d-flex gap-30 flex-wrap">
          <span>
            {table.amount} : {table.total}
          </span>
          {config.resetFilters && <Button>clear</Button>}
          <TableFilters
            columns={table.columns}
            setFilters={table.setFilters}
            filters={table.filters}
            filterable={config.filterable}
          />
        </div>
        <div className="d-flex gap-10">
          {config.cta && <Button>{config.cta.label}</Button>}
        </div>
      </div>
      <div>{config.export && <Button>{config.export.label}</Button>}</div>
      {/* ! end temporary ! */}
      <Table className="--border-parts">
        <Thead>
          <Tr>
            {table.columns.map((column, i) => (
              <RenderHeadCell
                key={i}
                sticky={config.sticky === column.key}
                className={config.sortable ? "--sortable" : ""}
                sortable={config.sortable?.includes(column.key)}
                onSort={() => table.setSort(column.key)}
              >
                {column.label}
                {config.sortable && (
                  <CharlieSorter
                    isActive={table.sort.slice(1) === column.key}
                    direction={table.sort[0] === "-" ? "backward" : "forward"}
                  />
                )}
              </RenderHeadCell>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {table.rows.map((row, i) => (
            <Tr key={i}>
              {table.columns.map((item, colIndex) => (
                <RenderCell
                  sticky={config.sticky === item.key}
                  key={colIndex}
                  row={row}
                  column={table.columns[colIndex]}
                  events={{
                    ...table.write(table.columns[colIndex].actions, row),
                  }}
                />
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className="d-flex justify-content-space-between">
        <select
          value={table.amount}
          onChange={(e) => table.setAmount(Number(e.target.value))}
        >
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <Pagination
          count={table.total / table.amount}
          page={table.page}
          setPage={table.setPage}
        />
      </div>
    </TableLayout>
  );
}
