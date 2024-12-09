"use server";

import connectDb from "@/lib/db/db";
import { Cart } from "@/modules/cart";
import { CartItem } from "@/types";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const addToCartAction = async ({
  items,
}: {
  items: CartItem;
}): Promise<{ msg: string }> => {
  const session = await getServerSession(options);

  if (!session) {
    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "access denies" });
    });
  }

  try {
    // console.log("session", session);
    await connectDb();

    const exsist = await Cart.findOne({ uid: session.user.id });

    if (!exsist) {
      const cart = await Cart.create({
        uid: session.user.id,
        items: [
          {
            name: items.name,
            price: items.price,
            catagory: items.catagory,
          },
        ],
      });
      return new Promise<{ msg: string }>((resolve, reject) => {
        resolve({ msg: " added to cart" });
      });
    }

    const cart = await Cart.findByIdAndUpdate(exsist._id, {
      $addToSet: {
        items: [
          { name: items.name, price: items.price, catagory: items.catagory },
        ],
      },
    });
    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "added to cart" });
    });
  } catch (err) {
    throw err;
  }
};
