import React, { Suspense } from "react";
import ProductWrapper from "./product/productWrapper";
import Review from "./review/Review";
import { getProductAction } from "@/actions/getProduct";
import Recomended from "@/utiles/getRecomendedItems";

async function Page({ params }: { params: { productId: string } }) {
  const data = await getProductAction(params.productId);
  return (
    <section className="p-5 min-h-full flex justify-center">
      <div className=" w-[92%] h-full">
        <div className="w-full flex gap-[12px]">
          <Suspense fallback={<div>loading...</div>}>
            <ProductWrapper params={params.productId} />
          </Suspense>
        </div>
        <section className="w-full mt-[20px]">
          <h4 className="text-[2rem]">For you</h4>
          <div
            className="flex flex-nowrap w-full gap-[4px] py-[4px] 
          scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent scrollbar-corner-transparent overflow-x-scroll 
          "
          >
            <Recomended />
          </div>
        </section>
        <Review />
      </div>
    </section>
  );
}

export default Page;
