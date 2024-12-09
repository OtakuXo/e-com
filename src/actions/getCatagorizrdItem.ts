"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";
import { ICard } from "@/types";

export const getCatagorizeItemAction = async (
  catagory: string,
  length: number
): Promise<ICard[]> => {
  try {
    await connectDb();
    const product = await Product.find({ catagory: { $in: [catagory] } }).limit(
      length
    );
    return new Promise<ICard[]>((resolve, reject) => {
      resolve(JSON.parse(JSON.stringify(product)));
    });
  } catch (err) {
    throw err;
  }
};
