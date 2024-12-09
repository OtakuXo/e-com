"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";
import { ICard } from "@/types";

export const getRecomendedItemsAction = async (
  length: number
): Promise<ICard[]> => {
  try {
    await connectDb();
    const items = await Product.find({}).limit(length);
    return new Promise<ICard[]>((resolve, reject) => {
      if (!items) reject(new Error("item not found"));
      resolve(JSON.parse(JSON.stringify(items)));
    });
  } catch (err) {
    throw err;
  }
};
