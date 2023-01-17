import React from "react";
import { ButtonProps } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Button(props: ButtonProps) {
  return (
    <button
      {...renderProps(props)}
      className={`sui-btn ${props.small ? "--small" : ""} ${
        props.large ? "--large" : ""
      } ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
