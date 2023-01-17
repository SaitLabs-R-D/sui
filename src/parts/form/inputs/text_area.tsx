import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";
import InputGroup from "./input_group";

export default function InputTextArea({
  className,
  title,
  label,
  id: propsId,
  children,
  ...rest
}: Tag) {
  return (
    <InputGroup className={className} title={title} label={label}>
      <textarea {...renderProps(rest)} className="sui-input --textarea">
        {children}
      </textarea>
    </InputGroup>
  );
}
