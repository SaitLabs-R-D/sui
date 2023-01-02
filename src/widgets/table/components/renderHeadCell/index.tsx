import React from "react";
import Th from "../../layout/th";
import { RenderHeadCellProps } from "../../../../types";

export default function RenderHeadCell({
  children,
  onSort,
  sortable,
  sticky,
  ...rest
}: RenderHeadCellProps) {
  const handleClick = () => {
    if (onSort && sortable) {
      onSort();
    }
  };

  return (
    <Th
      {...rest}
      className={`cell__wrraper ${rest.className || ""} ${
        sortable && "--sortable"
      } ${sticky && "--sticky"}`}
      onClick={handleClick}
    >
      {children}
    </Th>
  );
}
