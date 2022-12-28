import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function SPAN(props: Tag) {
  return <span {...renderProps(props)}>{props.children}</span>;
}
