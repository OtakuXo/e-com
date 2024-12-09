"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";
import { ProductType } from "@/types";

export const getProductAction = async (
  params: string
): Promise<ProductType> => {
  try {
    await connectDb();
    const items = await Product.findOne({ _id: params });
    return new Promise<ProductType>((resolve, reject) => {
      resolve(JSON.parse(JSON.stringify(items)));
    });
  } catch (err) {
    throw err;
  }
};
