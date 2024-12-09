import React from "react";
import { IoStarSharp } from "react-icons/io5";

function Rating({ i }: { i: string }) {
  let stars = [];
  for (let j = 0; j < parseInt(i) - 5; j++) {
    stars.push(j);
  }

  return (
    <div className="flex">
      {stars.map((i, index) => (
        <IoStarSharp key={index} color="yellow" />
      ))}
    </div>
  );
}

export default Rating;
