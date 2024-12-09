import React from "react";
import { removeProductAction } from "@/actions/removeproduct";

function RemoveProductBtn({ id }: { id: string }) {
  const removeItem = async () => {
    const ans = prompt("you sure");
    const res = removeProductAction(id);
    if (!res) {
      alert("failed to remove product");
    }
    alert("Product successfully reoved");
  };
  return (
    <button onClick={removeItem} className="bg-color1 hover:bg-color2">
      remove
    </button>
  );
}

export default RemoveProductBtn;
