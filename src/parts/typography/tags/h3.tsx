import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function H3(props: Tag) {
  return <h3 {...renderProps(props)}>{props.children}</h3>;
}
