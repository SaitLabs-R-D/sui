import { Tag } from "./tag";

export interface SorterProps extends Tag {
  isActive: boolean;
  direction: "forward" | "backward";
}
