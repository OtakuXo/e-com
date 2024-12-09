import React from "react";
import Image from "next/image";

function CardScalaton() {
  return (
    <div
      className="bg-color2 h-full shadow hover:shadow-white"
      style={{ width: "calc(20% - 4px)", minWidth: "200px" }}
    >
      <Image
        src={"/blank.png"}
        width={0}
        height={0}
        alt="image"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        style={{
          width: "100%",
          height: "13vw",
          minHeight: "200px",
          objectFit: "cover",
          objectPosition: "50% 0%",
        }}
        priority={true}
      />
      <div className="p-3 flex flex-col gap-[8px] ">
        <h3 className="w-full bg-slate-400 h-[1rem] "></h3>
        <p className="w-full bg-slate-400 h-[1.5rem] "></p>
        <div className="w-full bg-slate-400 h-[1rem] "></div>
      </div>
    </div>
  );
}

export default CardScalaton;

export const CardsScalatonArray = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {count.map((i) => (
        <CardScalaton key={i} />
      ))}
    </>
  );
};
