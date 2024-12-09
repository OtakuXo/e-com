"use client";
import React, { useState } from "react";
import { navType } from "@/types";
import Link from "next/link";

function NestedItems({ i }: { i: navType }) {
  const [hide, setHide] = useState(false);

  const clickHandler = () => {
    setHide(!hide);
  };

  if (!i.subitems) {
    return;
  }

  return (
    <div className="w-full">
      <button
        className="w-full py-[4px] px-[12px] flex justify-start hover:bg-color2 "
        onClick={() => clickHandler()}
      >
        {i.text}
      </button>
      {hide && (
          <div>
            {i.subitems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={"py-[4px] px-[12px] ml-[16px] hover:bg-color2"}
                >
                  <Link href={item.link}>{item.text}</Link>
                </div>
              );
            })}
          </div>

      )}
    </div>
  );
}

export default NestedItems;
