import React, { Suspense } from "react";
import Recomended from "@/utiles/getRecomendedItems";
import LatesrItems from "./latestItems";

export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[92%]  ">
        <section className="w-full mt-[20px] ">
          <h4 className="text-[2rem]">Latest Items</h4>
          <div
            className="flex flex-nowrap w-full gap-[4px] py-[4px] 
          scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-corner-transparent overflow-x-scroll 
          "
          >
            <LatesrItems />
          </div>
        </section>

        <section className="w-full my-[20px] ">
          <h4 className="w-full text-[2rem]">For You</h4>
          <div className="w-full flex flex-wrap gap-[4px] justify-center">
            <Recomended />
          </div>
        </section>
      </div>
    </div>
  );
}
