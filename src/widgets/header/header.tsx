import React from "react";
import { Tag } from "../../types";

export default function NavBar(props: Tag) {
  return <header className="sui-header">{props.children}</header>;
}
