"use client";
import React, { useState } from "react";
import Image from "next/image";
import SmallCard from "@/components/smallCard";
import AddToCart from "./addToCart";
import Rating from "@/components/rating";
import { ProductType } from "@/types";

function Product({ data }: { data: ProductType }) {
  const [zoom, setZoom] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  // console.log(mousePosition);
  return (
    <>
      <div id="productImage" className="flex flex-col gap-5">
        <div>
          <Image
            id="img"
            src={data.image}
            width={0}
            height={0}
            alt="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              minWidth: "200px",
              width: "20vw",
              maxHeight: "500px",
              height: "auto",
              borderRadius: "0.5rem",
              objectFit: "cover",
              objectPosition: "0px 0%",
            }}
            priority={true}
            onMouseOver={() => {
              setZoom(true);
            }}
            onMouseOut={() => {
              setZoom(false);
            }}
            onMouseMove={(e: React.MouseEvent<HTMLImageElement>) => {
              const img = document.getElementById("img");
              if (!img) {
                return;
              }
              let pointer = {
                x: (e.nativeEvent.offsetX * 100) / img?.offsetWidth,
                y: (e.nativeEvent.offsetY * 100) / img?.offsetHeight,
              };
              setMousePosition(pointer);
            }}
          />
        </div>
        <div className="flex gap-1">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
      {zoom ? (
        <div
          className={" w-full bg-[width: 200%] bg-[height: 200%]  "}
          // className="se w-full h-full"
          style={{
            backgroundImage: "url(" + data.image + ")",
            backgroundSize: "200%",
            backgroundPositionX: mousePosition.x + "%",
            backgroundPositionY: mousePosition.y + "%",
          }}
        ></div>
      ) : (
        <div className="w-full">
          <div>
            <h2 className="text-5xl font-medium">{data.name}</h2>
            <div className="py-[16px]">
              <Rating i={data.rate} />
            </div>
            <div className="bg-color1 w-full h-[4px]"></div>
          </div>
          <div className="mt-4">
            <p>Price Rs. {data.price}</p>
            <p>Discount: Rs.50</p>
            <p className="text-2xl">
              Get product at Rs{parseInt(data.price) - 50}
            </p>
          </div>
          <p className="py-[16px]"> catagory: {data.catagory}</p>
          <div>
            <button
              onClick={() => alert("function not emplimented yet")}
              className="bg-color2 hover:bg-color1 hover:text-color3  rounded-lg py-2 px-5 mr-2"
            >
              Buy now
            </button>
            <AddToCart i={data} />
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
