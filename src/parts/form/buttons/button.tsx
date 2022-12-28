import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Button(props: Tag) {
  return (
    <button
      {...renderProps(props)}
      className={`sui-btn --charlie ${props.size || ""} ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
}
