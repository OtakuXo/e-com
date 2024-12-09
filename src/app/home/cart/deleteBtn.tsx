"use client";

import { useRouter } from "next/navigation";
import { deleteCartItemsAction } from "@/actions/deleteCartItem";

function Deletebtn({ cartItemId }: { cartItemId: { id: string } }) {
  const route = useRouter();
  const clickHandler = async () => {
    try {
      const data = await deleteCartItemsAction(cartItemId.id);
      alert(data.msg);
      route.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button onClick={clickHandler} className="bg-red-700 px-2 py-1 rounded-lg">
      del
    </button>
  );
}

export default Deletebtn;
