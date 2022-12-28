import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function LABEL(props: Tag) {
  return <label {...renderProps(props)}>{props.children}</label>;
}
