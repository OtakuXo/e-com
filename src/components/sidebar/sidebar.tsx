import React from "react";
import SidebarBtns from "./sidebarBtns";
import { navType } from "@/types";

function Sidebar() {
  const sidebarItems: navType[] = [
    { text: "Plush", link: "/home/catagory/plush" },
    { text: "Figure", link: "/home/catagory/figure" },
    { text: "Cloths", link: "/home/catagory/cloths" },
  ];
  return (
    <section className="  h-full py-[20px] px-[40px] bg-color4 ">
      <ul className="mb-[8px] p-[8px] border-b-[2px] border-color2 ">
        <SidebarBtns i={{ text: "Home", link: "/home" }} />
      </ul>

      <ul className="flex flex-col gap-[4px] p-[8px] border-b-[2px] border-color2 ">
        <li>
          <h4 className="w-full  font-semibold flex justify-center ">
            Catagory
          </h4>
        </li>
        {sidebarItems.map((i, index) => (
          <SidebarBtns key={index} i={i} />
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
