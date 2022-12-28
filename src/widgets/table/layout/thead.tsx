import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Thead(props: Tag) {
  return (
    <thead
      {...renderProps(props, ["className"])}
      className={`sui-table__thead ${props.className ?? ""}`}
    >
      {props.children}
    </thead>
  );
}
