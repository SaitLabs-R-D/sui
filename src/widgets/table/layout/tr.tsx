import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Tr(props: Tag) {
  return (
    <tr
      {...renderProps(props, ["className"])}
      className={`sui-table__row ${props.className ?? ""}`}
    >
      {props.children}
    </tr>
  );
}
