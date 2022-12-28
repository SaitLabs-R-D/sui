import React from "react";

export default function InputGroup(props: any) {
  return (
    <div {...props} className="sui-input-group">
      {props.children}
    </div>
  );
}
