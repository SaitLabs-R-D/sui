import deepCopy from "./deepClone";

export default function exclude<T>(obj: object, keys: string[]): T {
  const newObj = deepCopy(obj);
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}
