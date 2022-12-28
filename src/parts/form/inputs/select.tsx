import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function InputSelect(props: Tag) {
  return (
    <div className="sui-input-container --charlie">
      <select className="sui-input --select" {...renderProps(props)}>
        {props.children}
      </select>
    </div>
  );
}
