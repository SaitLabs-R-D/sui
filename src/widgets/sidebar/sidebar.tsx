import React from "react";
import Icons from "../../assets/icons";
import { A } from "../../parts";
import { Tag } from "../../types";

export interface SideBarProps extends Tag {
  navItems?: navItem[];
}

export interface navItem extends Tag {
  name: string;
  url: string;
  icon?: React.ReactElement;
  isActive?: boolean;
}

export default function SideBar({ navItems, ...rest }: SideBarProps) {
  return (
    <nav className="sui-sidebar" {...rest}>
      {navItems?.map((item, index) => {
        const { url, icon, name, isActive, className, ...rest } = item;
        return (
          <A
            href={url}
            className={`sui-sidebar__nav-item ${className || ""}`}
            data-active={isActive ?? window.location.href.includes(url)}
            key={index}
            {...rest}
          >
            {icon && <div className="sui-sidebar__icon">{icon}</div>}

            <span className="sui-sidebar__text">{name}</span>
          </A>
        );
      })}
    </nav>
  );
}
