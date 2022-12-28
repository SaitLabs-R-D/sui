import { Tag } from "../../types";
import deepCopy from "./deepClone";
import exclude from "./exclude";

const CUSTOM_ATTRIBUTES = ["block"];

export default function renderProps<T>(props: Tag, exc: string[] = []): T {
  let newProps = deepCopy(props);

  newProps = exclude(newProps, exc.concat(["children"]));

  for (const attr of CUSTOM_ATTRIBUTES) {
    if (newProps[attr] === true) {
      newProps[attr] = "true";
    } else if (typeof newProps[attr] !== "undefined") {
      newProps[attr] = "";
    }
  }

  return newProps;
}
