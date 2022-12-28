// # https://mui.com/material-ui/react-pagination/
// tests/pagination.test.js
import { PaginationItems } from "../../../types";

export function getPaginationItems(
  count: number,
  page: number
): PaginationItems {
  // *show which arrows to light up
  const canGo = {
    prev: page > 1,
    next: page < count,
  };

  // one of first 5 pages -> should show 1, 2, 3, 4, 5 ... [last]
  // or if length is less than 5, all pages
  if (count < 4 || page < 5) {
    return {
      items: Array.from({ length: Math.min(count, 5) }, (_, i) => i + 1),
      after: count > 5 ? count : -1,
      before: -1,
      ...canGo,
    };
  }

  // one of last 4 pages -> should show [first] ... [6, 7, 8, 9, 10]
  if (Math.abs(page - count) < 4) {
    return {
      items: Array.from({ length: 5 }, (_, i) => count - 4 + i),
      before: 1,
      after: -1,
      ...canGo,
    };
  }

  // it's somewhere in the middle
  // -> [first] ... [4, 5, 6] ... [last]
  return {
    items: Array.from({ length: 3 }, (_, i) => page - 1 + i),
    before: 1,
    after: count,
    ...canGo,
  };
}
