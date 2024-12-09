import React from "react";
import SidebarBtns from "./sidebarBtns";
import { navType } from "@/types";

function AdminSidebar() {
  const sidebarItems: navType[] = [
    { text: "Dashboard", link: "/admin/dashboard" },
    {
      text: "Product",
      subitems: [
        { text: "Add Product", link: "/admin/product/addproduct" },
        { text: "Remove Product", link: "/admin/product/removeproduct" },
        { text: "Edit Product", link: "/admin/product/editproduct" },
      ],
    },
    { text: "Users", link: "/admin/users" },
  ];
  return (
    <nav className="  h-full py-[20px] px-[40px] bg-color4 ">
      <ul className="mb-[8px] p-[8px] border-b-[2px] border-color2 ">
        <SidebarBtns i={{ text: "Home", link: "/home" }} />
      </ul>
      <ul className="flex flex-col gap-[4px] p-[8px] border-b-[2px] border-color2 justify-start ">
        {sidebarItems.map((i, index) => (
          <SidebarBtns key={index} i={i} />
        ))}
      </ul>
      <ul className="mb-[8px] p-[8px] border-b-[2px] border-color2 ">
        <SidebarBtns
          i={{ text: "logout", link: "/api/auth/signout?callbackUrl=/home" }}
        />
      </ul>
    </nav>
  );
}

export default AdminSidebar;
