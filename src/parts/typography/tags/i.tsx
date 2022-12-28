import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function I(props: Tag) {
  return <i {...renderProps(props)}>{props.children}</i>;
}
