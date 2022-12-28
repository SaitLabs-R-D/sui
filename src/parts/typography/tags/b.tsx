import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function B(props: Tag) {
  return <b {...renderProps(props)}>{props.children}</b>;
}
