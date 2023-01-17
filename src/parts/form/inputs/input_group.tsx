import React from "react";
import { Tag } from "../../../types";

export default function InputGroup({
  className,
  label,
  title,
  id,
  children,
  ...rest
}: any) {
  return (
    <div {...rest} className={`sui-input-group ${className || ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {title && <span>{title}</span>}
    </div>
  );
}
