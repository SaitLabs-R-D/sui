import React from "react";
import Icons from "../../assets/icons";
import { A } from "../typography";

export default function SideBar(props: any) {
  const pages = [
    {
      name: "Users",
      url: "/users",
      icon: Icons["settings"],
    },
    {
      name: "Products",
      url: "/products",
      icon: Icons["settings"],
    },
    {
      name: "Projects",
      url: "/projects",
      icon: Icons["settings"],
    },
    {
      name: "Clients",
      url: "/clients",
      icon: Icons["settings"],
    },
  ];

  return (
    <div className="container">
      {pages.map((item, index) => (
        <A
          href={item.url}
          className="nav-item"
          key={index}
          onClick={() => (window.location.href = item.url)}
        >
          {item.icon}
          <span>{item.name}</span>
        </A>
      ))}
    </div>
  );
}
