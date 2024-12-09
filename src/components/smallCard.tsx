import React from "react";
import Image from "next/image";

function SmallCard() {
  return (
    <div>
      <Image
        src={"/user.png"}
        width={0}
        height={0}
        alt="image"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        style={{
          width: "5vw",
          height: "5vw",
          objectFit: "cover",
          objectPosition: "0px 0%",
        }}
        priority={true}
      />
    </div>
  );
}

export default SmallCard;
