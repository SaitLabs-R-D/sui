import { useEffect, useState } from "react";
import { TableState } from "../../../../types";
import { pipes } from "../../../../helpers";

/*
  * This hook belongs to useTable.
  * Do not use it outside of useTable.
  ! Go. Away.
*/

export default function useStateToUrl(
  tableState: TableState,
  setTableState: (funcs: TableState) => void
) {
  const [finishedInitiating, setFinishedInitiating] = useState(false);

  useEffect(() => {
    // first, read the url -> aftet that we can start playing...
    if (!finishedInitiating) return;

    const { filters, sort, page, amount } = tableState;
    const url = new URLSearchParams(document.location.search);

    // set url params
    url.set("page", page.toString());
    url.set("amount", amount.toString());
    url.set("sort", sort);
    url.set("filters", pipes.stringify(filters));

    // navigate to new url
    window.history.pushState(
      {},
      "",
      `${document.location.pathname}?${url.toString()}`
    );
  }, [tableState, finishedInitiating]);

  useEffect(() => {
    if (finishedInitiating) return;

    const url = new URLSearchParams(document.location.search);

    const page = url.get("page");
    const amount = url.get("amount");
    const sort = url.get("sort");
    const filters = url.get("filters");

    // set table state
    setTableState({
      page: page ? parseInt(page) : 1,
      amount: amount ? parseInt(amount) : 10,
      sort: sort ? decodeURIComponent(sort) : "",
      filters: pipes.parse(filters || "{}"),
    });

    setFinishedInitiating(true);
  }, []);

  return {
    finishedInitiating,
    tableState,
  };
}
