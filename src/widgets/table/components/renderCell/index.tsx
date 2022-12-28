import React from "react";
import Td from "../../layout/td";
import { RenderCellProps } from "../../../../types";
import Icons from "../../../../assets/icons";

export default function RenderCell({
  row,
  column,
  sticky,
  events,
  ...rest
}: RenderCellProps) {
  const value = row[column.key];
  const className = `cell__wrraper ${sticky ? "--sticky" : ""}`;

  if (column?.type === "status") {
    return (
      <Td {...rest} className={className}>
        <div
          style={{
            color: column.colors ? column.colors[+value] : "inherit",
            fontWeight: "bold",
          }}
        >
          {column.options ? column.options[+value] : value}
        </div>
      </Td>
    );
  }

  if (column?.type === "button") {
    return (
      <Td {...rest} className={className}>
        <button {...events}>{column.label}</button>
      </Td>
    );
  }
  if (column?.type === "checkbox") {
    return (
      <Td {...rest} className={className}>
        <input {...events} type="checkbox" onChange={() => {}} />
      </Td>
    );
  }
  if (column?.type === "input") {
    return (
      <Td {...rest} className={className}>
        <input {...events} />
      </Td>
    );
  }
  if (column?.type === "select") {
    return (
      <Td {...rest} className={className}>
        <select {...events}>
          {column.options?.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Td>
    );
  }
  if (column?.type === "icon") {
    return (
      <Td {...rest} {...events} className={className}>
        {Icons[column.key] || ""}
      </Td>
    );
  }
  if (column.type === "link") {
    return (
      <Td {...rest} className={className}>
        <a {...events}>{value}</a>
      </Td>
    );
  }
  return (
    <Td {...rest} {...events} className={className}>
      {value}
    </Td>
  );
}
