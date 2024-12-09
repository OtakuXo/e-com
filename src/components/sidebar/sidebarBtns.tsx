import { navType } from "@/types";
import Link from "next/link";
import React from "react";
import NestedItems from "./nestedItems";

function SidebarBtns({ i }: { i: navType }) {
  if (i.link) {
    return (
      <li className="w-[200px]">
        <Link href={i.link} className="w-full" style={{ width: "100%" }}>
          <div className="w-full h-full py-[8px] px-[12px] hover:bg-color2 ">
            {i.text}
          </div>
        </Link>
      </li>
    );
  }

  if (i.subitems) {
    return (
      <li className="w-full">
        <NestedItems i={i} />
      </li>
    );
  }
}

export default SidebarBtns;
