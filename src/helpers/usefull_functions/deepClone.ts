import { isValidElement, cloneElement } from "react";

export default function deepCopy(obj: any): any {
  if (isValidElement(obj)) {
    return cloneElement(obj);
  }
  if (obj instanceof Function) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  if (Object(obj) === obj) {
    let newObj: any = {};
    Object.keys(obj).forEach((key) => (newObj[key] = deepCopy(obj[key])));
    return newObj;
  }
  return obj;
}
