import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function InputSelect(props: Tag) {
  return (
    <div>
      <select className="sui-input --select" {...renderProps(props)}>
        {props.children}
      </select>
    </div>
  );
}
