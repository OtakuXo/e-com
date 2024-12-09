import React from "react";
import { Cart } from "@/modules/cart";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Deletebtn from "./deleteBtn";
import connectDb from "@/lib/db/db";
import { redirect } from "next/navigation";
import { getCartItemsAction } from "@/actions/getCartItems";

async function Page() {
  const session = await getServerSession(options);
  let total = 0;
  if (!session) {
    redirect("/accessdenied/unauthorize");
  }

  let cartItems = await getCartItemsAction(session);
  try {
    await connectDb();
    const cart = await Cart.findOne({ uid: session.user.id });
    cartItems = cart.items;
  } catch (err) {
    console.log(err);
  }
  return (
    <section className="flex  justify-center  mt-5 ">
      <div className=" w-3/4 bg-gray-800 rounded-3xl p-5">
        <h2 className="flex justify-center p-4 text-2xl">Your Cart Items</h2>
        <table className="w-full border-spacing-2  ">
          <thead>
            <tr>
              <th>SN.</th>
              <th>Name</th>
              <th>Catagory</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((i, index) => {
              total = total + parseInt(i.price);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.catagory}</td>
                  <td>{i.price}</td>
                  <td className="border-none">
                    <Deletebtn cartItemId={{ id: JSON.stringify(i._id) }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default Page;
