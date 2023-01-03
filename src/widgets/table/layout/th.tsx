import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Th(props: Tag) {
  return (
    <th
      scope="col"
      {...renderProps(props, ["className"])}
      className={`sui-table__cell sui-table__cell--th ${props.className ?? ""}`}
    >
      <div>{props.children}</div>
    </th>
  );
}
