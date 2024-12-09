"use client";

import React, { useState } from "react";
import { FaBurger } from "react-icons/fa6";
import Image from "next/image";
import Links from "./links";
// import { registerUserType } from "@/types";
import { linksType } from "@/types";

function Drawer({ i }: { i: linksType[] }) {
  const [display, setDisplay] = useState("hidden");

  return (
    <>
      <button onClick={() => setDisplay("block")} aria-label="nav toggler">
        <FaBurger />
      </button>
      <div className="bg-white text-black fixed top-0 bottom-0 right-0">
        <div className={`${display}  p-5`}>
          <header className="flex gap-4 mb-5">
            <Image
              src={"/next.svg"}
              width={0}
              height={0}
              priority={true}
              style={{
                minWidth: "100px",
                width: "10vw",
                maxWidth: "250px",
                height: "auto",
              }}
              alt=""
            />
            <button
              onClick={() => setDisplay("hidden")}
              aria-label="nav toggler"
            >
              <FaBurger />
            </button>
          </header>
          <ul>
            {i.map((i) => (
              <Links key={i.link} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
