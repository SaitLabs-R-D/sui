import React from "react";
import { ButtonProps } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Button({ large, small, ...props }: ButtonProps) {
  return (
    <button
      {...renderProps(props)}
      className={`sui-btn ${small ? "--small" : ""} ${large ? "--large" : ""} ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
}
