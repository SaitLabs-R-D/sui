import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function TableLayout(props: Tag) {
  return (
    <div
      {...renderProps(props, ["className"])}
      className={`sui-layout ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
}
