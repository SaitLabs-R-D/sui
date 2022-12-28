import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function H1(props: Tag) {
  return <h1 {...renderProps(props)}>{props.children}</h1>;
}
