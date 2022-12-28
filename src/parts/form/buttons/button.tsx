import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";
import "./style.scss";

export default function Button(props: Tag) {
  return (
    <button
      {...renderProps(props)}
      className={`sui-btn --charlie ${props.size || ""} ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
}
