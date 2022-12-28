import React from "react";
import { LinkProps } from "../../../types";
import { renderProps } from "../../../helpers";
import { Link } from "react-router-dom";

export default function A(props: LinkProps) {
  if (typeof props.href === "string") {
    return <a {...renderProps(props)}>{props.children}</a>;
  }
  return <Link {...renderProps(props)}>{props.children}</Link>;
}
