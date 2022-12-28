import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function Strong(props: Tag) {
  return <strong {...renderProps(props)}>{props.children}</strong>;
}
