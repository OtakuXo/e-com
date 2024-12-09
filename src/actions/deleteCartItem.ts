"use server";

import connectDb from "@/lib/db/db";
// import { Product } from "@/modules/product";
import { Cart } from "@/modules/cart";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const deleteCartItemsAction = async (
  id: string
): Promise<{ msg: string }> => {
  const session = await getServerSession(options);

  if (!session) {
    return new Promise<{ msg: any }>((resolve, reject) => {
      resolve({ msg: "access denies" });
    });
  }
  try {
    await connectDb();
    const cart = await Cart.updateOne(
      { uid: session.user.id },
      {
        $pull: { items: { _id: JSON.parse(id) } },
      }
    );
    console.log(cart);
    if (!cart) {
      return new Promise<{ msg: string }>((resolve, reject) => {
        resolve({ msg: "failed to remove item" });
      });
    }

    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "successfully deleted item form cart" });
    });
  } catch (err) {
    throw err;
  }
};
