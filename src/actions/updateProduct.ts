"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";
import { ProductType } from "@/types";

export const updateProductAction = async (
  values: ProductType
): Promise<{ msg: string }> => {
  try {
    await connectDb();
    const product = await Product.updateOne(
      { _id: values._id },
      {
        name: values.name,
        image: values.image,
        price: values.price,
        rate: values.rate,
        descriprion: values.description,
        catagory: values.catagory,
      }
    );
    return new Promise<{ msg: string }>((resolve) => {
      resolve({ msg: "successfully updated product" });
    });
  } catch (err) {
    return new Promise<{ msg: string }>((reject) => {
      reject({ msg: "failed to update product" });
    });
  }
};
