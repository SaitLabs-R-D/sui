import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Li(props: Tag) {
  return <li {...renderProps(props)}>{props.children}</li>;
}
