import { AllHTMLAttributes } from "react";
import { LinkProps as Link } from "react-router-dom";

export interface Tag extends AllHTMLAttributes<HTMLElement> {}

export type LinkProps = (Link & Tag) | Tag;
