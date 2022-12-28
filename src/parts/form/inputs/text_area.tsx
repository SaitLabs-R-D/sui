import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function InputTextArea(props: Tag) {
  return (
    <textarea {...renderProps(props)} className="sui-input --textarea">
      {props.children}
    </textarea>
  );
}
