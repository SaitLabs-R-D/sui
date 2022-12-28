import "./style.scss";

export default function ButtonOutlined(props: any) {
  return (
    <button
      {...props}
      className={`sui-btn --outlined ${props.size || ""} ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
}
