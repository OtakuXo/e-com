"use client";
import React, { useState } from "react";
import { reviewType } from "@/types";

function ReviewAccordent({ i }: { i: reviewType }) {
  const [readmore, setReadmore] = useState<boolean>(false);

  return (
    <div>
      <h5 className="font-[700] text-[1.6rem]">{i.text}</h5>
      <p className="text">
        {readmore ? i.massage : `${i.massage.substring(0, 100)}...`}

        <button onClick={() => setReadmore(!readmore)}>
          {readmore ? "show less" : "read more"}
        </button>
      </p>
    </div>
  );
}

export default ReviewAccordent;
