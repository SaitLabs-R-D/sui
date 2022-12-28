import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Tbody(props: Tag) {
  return (
    <tbody
      {...renderProps(props, ["className"])}
      className={`sui-table__tbody ${props.className ?? ""}`}
    >
      {props.children}
    </tbody>
  );
}
