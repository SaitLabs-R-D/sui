import React from "react";
import { Tag } from "../../types";
import { renderProps } from "../../helpers";

export default function P(props: Tag) {
  return <p {...renderProps(props)}>{props.children}</p>;
}
