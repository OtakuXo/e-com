"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";
import { ICard } from "@/types";

export const getLatestItemsAction = async (
  length: number
): Promise<ICard[]> => {
  try {
    await connectDb();
    const items = await Product.find({}).sort({ createdAt: -1 }).limit(length);

    return new Promise<ICard[]>((resolve, reject) => {
      resolve(JSON.parse(JSON.stringify(items)));
    });
  } catch (err) {
    throw err;
  }
};
