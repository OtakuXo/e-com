"use client";
import React, { FormEvent, useState } from "react";
import { getProductByNameAction } from "@/actions/getProductbyname";
import { ProductType } from "@/types";
import Image from "next/image";
import RemoveProductBtn from "./removeProductBtn";
function Page() {
  const [productName, setProductName] = useState<string>("");
  const [product, setProduct] = useState<ProductType>();
  const [err, setErr] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await getProductByNameAction(productName);
    if (!res) {
      setErr("item did not found");
      return;
    }
    setProduct(res);
    setErr("");
  };

  return (
    <section className="flex min-h-screen justify-center items-center">
      <div className="p-[40px] bg-color2 rounded-[8px] ">
        <header className="text-[2rem] font-bold">Remove Product</header>
        <p>find product you want to remove</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="remove">Product Name</label>
          <input
            id="remove"
            className="text-black"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <button type="submit">search</button>
        </form>

        {err && <div>{err}</div>}
        {product && (
          <div>
            <div className="w-[200px]">
              <Image
                src={product.image}
                width={0}
                height={0}
                alt="image"
                sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "200px",
                  // borderRadius: "0.5rem",
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                }}
                loading="lazy"
              />
              <p>{product.name}</p>
            </div>
            <RemoveProductBtn id={product._id} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Page;
