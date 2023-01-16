import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function InputDate(props: Tag) {
  return (
    <div className="sui-input-container">
      <input className="sui-input --date" {...renderProps(props)}>
        {props.children}
      </input>
    </div>
  );
}
