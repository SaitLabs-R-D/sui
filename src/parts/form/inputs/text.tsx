import { Tag } from "../../../types";
import { renderProps } from "../../../helpers";

export default function InputText(props: Tag) {
  return (
    <div className={`${props.className} sui-input-container --charlie`}>
      <input {...renderProps(props)} className="sui-input --text" />
      <span>{props?.title}</span>
    </div>
  );
}
