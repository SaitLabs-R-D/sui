import React from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";
import InputGroup from "./input_group";

export default function InputSelect({
  className,
  title,
  label,
  id: propsId,
  children,
  ...rest
}: Tag) {
  // children-options
  //rest - value, onChange, etc...
  return (
    <InputGroup className={className} title={title} label={label}>
      <select className="sui-input --select" {...renderProps(rest)}>
        {children}
      </select>
    </InputGroup>
  );
}
