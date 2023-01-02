import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Td(props: Tag) {
  return (
    <td
      {...renderProps(props, ["className"])}
      className={`sui-table__cell sui-table__cell--td ${props.className ?? ""}`}
    >
      {props.children}
    </td>
  );
}
