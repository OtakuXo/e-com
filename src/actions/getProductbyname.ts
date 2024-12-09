"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";
import { ProductType } from "@/types";

export const getProductByNameAction = async (
  productName: string
): Promise<ProductType> => {
  try {
    await connectDb();
    const items = await Product.findOne({ name: productName });
    return new Promise<ProductType>((resolve, reject) => {
      resolve(JSON.parse(JSON.stringify(items)));
    });
  } catch (err) {
    throw err;
  }
};
