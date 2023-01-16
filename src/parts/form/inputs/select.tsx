import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function InputSelect(props: Tag) {
  return (
    <div className="sui-input-container">
      <select className="sui-input sui-input--select" {...renderProps(props)}>
        {props.children}
      </select>
    </div>
  );
}
