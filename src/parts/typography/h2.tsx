import React from "react";
import { Tag } from "../../types";
import { renderProps } from "../../helpers";

export default function H2(props: Tag) {
  return <h2 {...renderProps(props)}>{props.children}</h2>;
}
