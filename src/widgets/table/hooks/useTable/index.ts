import { useState, useEffect } from "react";
import * as Types from "../../../../types";
import useStateToUrl from "../useStateToUrl";
import { exclude, formatFilters } from "../../../../helpers";
import axios from "axios";

export default function useTable({
  getRows,
  columns: initialColumns,
  config: initialConfig,
}: Types.useTableProps) {
  // data
  const [data, setData] = useState<Types.TableHook>({
    columns: initialColumns,
    config: initialConfig,
    rows: [],
  });

  // data, but in smaller parts
  const [rows, setRows] = useState<Types.Row[]>([]);
  const [columns, setColumns] = useState<Types.Column[]>([]);

  const [total, setTotal] = useState<number>(0);

  const [config, setConfig] = useState<Types.TableConfig>({});
  const [selectedRows, setSelectedRows] = useState<Types.Row[]>([]);

  // state - filters & sort
  const [filters, _setFilters] = useState<Types.Filter>({});
  const [sort, _setSort] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [amount, setAmount] = useState<number>(10);

  // listen to state changes and update url
  const { finishedInitiating, tableState } = useStateToUrl(
    {
      filters,
      sort,
      page,
      amount,
    },
    ({ filters, sort, page, amount }) => {
      _setFilters(filters);
      setSort(sort);
      setPage(page);
      setAmount(amount);
    }
  );

  useEffect(() => {
    if (!finishedInitiating) return;

    getRows({ page, amount, sort, filters: formatFilters(filters) }).then(
      ({ rows, total }) => {
        setTotal(total);
        setData((prv) => ({
          ...prv,
          rows,
        }));
      }
    );
  }, [page, amount, sort, filters]);

  const setFilters = (
    field: string,
    value: Types.FilterValue,
    operator?: Types.FilterOperators
  ) => {
    if (typeof value === "undefined") {
      _setFilters((prv) => {
        return exclude(prv, [field]);
      });
      return;
    }

    if (!operator) {
      const column = columns.find((c) => c.key === field);
      if (!column) return;

      if (["text", "input", "number"].includes(column.type)) {
        operator = "eq";
      } else if (["select"].includes(column.type)) {
        operator = "in";
      }

      if (!operator) return;
    }

    _setFilters((prv) => ({
      ...prv,
      [field]: {
        ...prv[field],
        [operator || ""]: value,
      },
    }));
  };

  const fireAction = (action: Types.Action) => {
    console.log(action);
  }; // fire an action

  const toggleRow = (rowIndex: number) => {}; // add / remove from selectedRows
  const resetFiltersAndSort = () => {
    _setFilters({});
    _setSort("");
  }; // reset filters and sort

  useEffect(() => {
    const { rows, columns, config } = data;

    setRows(rows);
    setColumns(columns);
    setConfig(config);
  }, [data]);

  const setSort = (str: string) => {
    if (!data.config.sortable) return;

    // todo
    if (str === "+") {
      _setSort("");
      return;
    }

    if (["+", "-"].includes(str[0])) {
      _setSort(str);
      return;
    }

    const dir = sort[0];
    const key = sort.slice(1);

    if (key === str) {
      // toggle direction
      _setSort(`${dir === "+" ? "-" : "+"}${str}`);
    } else {
      // set new sort
      _setSort(`${"+"}${str}`);
    }
  };

  const translateActionUrl = (
    url: string,
    row: Types.Row,
    crr: string = ""
  ) => {
    const regex = /{{(.*?)}}/g;
    const matches = url.match(regex);

    matches?.forEach((match) => {
      const value = match.replace("{{", "").replace("}}", "");

      if (value === "crr") {
        // from e
        url = url.replace(match, crr);
      } else if (value === "state") {
        // table state
        url = url.replace(match, JSON.stringify(tableState));
      } else {
        const [where, key] = [value[0], value.slice(1)];

        if (where === "~") {
          // from row
          url = url.replace(match, row[key].toString());
        } else if (where === "-" && config.custom) {
          // from config.custom
          url = url.replace(match, config.custom[key].toString());
        }
      }
    });

    return url;
  };

  const write = (actions: Types.Action[] = [], row: Types.Row) => {
    const events: any = {};

    actions.forEach((action) => {
      if (action.type === "href") {
        events["href"] = translateActionUrl(action.url, row);
        return;
      }
      events[action.type] = (e: Types.ActionEvents) => {
        fire(e, action, row);
      };
    });

    return events;
  };

  const fire = (
    e: Types.ActionEvents,
    action: Types.Action,
    row: Types.Row
  ) => {
    console.log(translateActionUrl(action.url, row, e.target.value));

    axios({
      method: action.method,
      url: translateActionUrl(action.url, row, e.target.value),
    });
  };

  return {
    amount,
    setAmount,

    total,
    setTotal,

    // states
    rows,
    columns,
    config,

    page,
    setPage,

    sort,
    setSort,

    filters,
    setFilters,

    selectedRows,

    write,

    // actions
    setData,
    fireAction,
    toggleRow,
    resetFiltersAndSort,
  };
}
