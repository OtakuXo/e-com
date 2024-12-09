"use client";
import React, { FormEvent, useState } from "react";
import { getProductByNameAction } from "@/actions/getProductbyname";
import { ProductType } from "@/types";
import Editform from "./editform";

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
    <section className="w-full p-[20px] flex min-h-screen justify-center items-center">
      <div className="w-full min-h-[80vh] p-[40px] bg-color2 rounded-[8px] ">
        <header className="text-[2rem] font-bold">Edit Product</header>
        <p>find product you want to edit</p>
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
          <div className="flex">
            <Editform product={product} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Page;
