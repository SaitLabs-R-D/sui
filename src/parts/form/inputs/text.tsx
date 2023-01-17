import React, { useId } from "react";
import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";
import InputGroup from "./input_group";

export default function InputText({
  className,
  title,
  label,
  id: propsId,
  ...rest
}: Tag) {
  const id = useId() || propsId;
  return (
    <InputGroup id={id} className={className} title={title} label={label}>
      <input {...renderProps(rest)} id={id} className="sui-input --text" />
    </InputGroup>
  );
}
