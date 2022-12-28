import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Tfoot(props: Tag) {
  return (
    <tfoot
      {...renderProps(props, ["className"])}
      className={`sui-table__foot ${props.className ?? ""}`}
    >
      {props.children}
    </tfoot>
  );
}
