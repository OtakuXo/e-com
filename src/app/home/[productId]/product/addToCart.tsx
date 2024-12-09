"use client";
import { addToCartAction } from "@/actions/addToCart";
import { CartItem } from "@/types";

function AddToCart({ i }: { i: CartItem }) {
  // const session = useSession();
  const handleClick = async () => {
    const data = await addToCartAction({ items: i });
    alert(data.msg);
  };
  return (
    <button
      className="bg-color2 hover:bg-color1 hover-text-color3 rounded-lg py-2 px-5"
      onClick={handleClick}
    >
      add to cart
    </button>
  );
}

export default AddToCart;
