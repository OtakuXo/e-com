"use server";

import connectDb from "@/lib/db/db";
import { Product } from "@/modules/product";

export const removeProductAction = async (
  id: string
): Promise<{ msg: string }> => {
  try {
    await connectDb();
    await Product.deleteOne({ _id: id });
    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "successfully removed product form store" });
    });
  } catch (err) {
    throw err;
  }
};
