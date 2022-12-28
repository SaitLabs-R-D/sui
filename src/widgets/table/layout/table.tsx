import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Table(props: Tag) {
  return (
    <div className="sui-table__wrraper">
      <table
        {...renderProps(props, ["className", "cellSpacing", "cellPadding"])}
        cellPadding={props.cellPadding ?? 0}
        cellSpacing={props.cellSpacing ?? 0}
        className={`sui-table ${props.className ?? ""}`}
      >
        {props.children}
      </table>
    </div>
  );
}
