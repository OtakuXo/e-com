import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ICard } from "@/types";
import Rating from "./rating";

function Card({ i }: { i: ICard }) {
  return (
    <Link
      style={{ width: "calc(20% - 5px)", minWidth: "200px" }}
      // className=" w-full min  md:w-[calc(20% - 5px)]"
      href={"/home/" + i._id}
    >
      <div className="bg-color2 w-full h-full shadow hover:shadow-white">
        <Image
          src={i.image}
          width={0}
          height={0}
          alt="image"
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
          style={{
            width: "100%",
            height: "13vw",
            minHeight: "200px",
            // borderRadius: "0.5rem",
            objectFit: "cover",
            objectPosition: "50% 0%",
          }}
          // loading="lazy"
          property="true"
        />
        <div className="p-3">
          <h3>{i.name}</h3>
          <p className="text-xl font-extrabold text-color3 ">Rs.{i.price}</p>
          <div className="flex items-center gap-1 ">
            <Rating i={i.rate} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
