"use server";

import connectDb from "@/lib/db/db";
import { Cart } from "@/modules/cart";
import { CartItem } from "@/types";

export const getCartItemsAction = async (session: {
  user: { id: string };
}): Promise<CartItem[]> => {
  try {
    await connectDb();
    const cart = await Cart.findOne({ uid: session.user.id });

    return new Promise<CartItem[]>((resolve, reject) => {
      if (!cart) {
        resolve([
          {
            name: "nothing has been",
            price: "0",
            catagory: "none",
            _id: "",
          },
        ]);
      }

      resolve(cart.items);
    });
  } catch (err) {
    throw err;
  }
};
