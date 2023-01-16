import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { SorterProps } from "../../../../types";

export default function Sorter({
  isActive = false,
  direction = "forward",
  ...rest
}: SorterProps) {
  return (
    <div
      {...rest}
      className={`${rest.className || ""} sui-sorter  ${
        isActive ? "--active" : ""
      } --${direction}`}
    >
      <HiArrowSmDown />
    </div>
  );
}
