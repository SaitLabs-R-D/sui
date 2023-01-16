import React from "react";
import { Tag } from "../../types";
import { renderProps } from "../../helpers";

export default function Ul(props: Tag) {
  return <ul {...renderProps(props)}>{props.children}</ul>;
}
