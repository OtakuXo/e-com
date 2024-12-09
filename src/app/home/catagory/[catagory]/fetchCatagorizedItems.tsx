"use client";
import { useEffect, useState } from "react";
import { ICard } from "@/types";
import Card from "@/components/card";
import { CardsScalatonArray } from "@/components/suspenseScalaton/cardsScalaton";
import { getCatagorizeItemAction } from "@/actions/getCatagorizrdItem";

function Catagorized({ params }: { params: string }) {
  const [length, setLength] = useState<number>(10);
  const [CatagorizedItems, setCatagorizedItems] = useState<ICard[]>();

  useEffect(() => {
    const getItems = async () => {
      const res = await getCatagorizeItemAction(params, length);
      console.log(res);
      setCatagorizedItems(res);
    };

    getItems();
  }, [length, params]);

  if (!CatagorizedItems) {
    return (
      <div className="w-full gap-[4px] flex flex-wrap">
        <CardsScalatonArray />;
      </div>
    );
  }

  return (
    <>
      <div className="w-full gap-[4px] flex flex-wrap">
        {CatagorizedItems.map((i: ICard) => (
          <Card key={i._id} i={i} />
        ))}
      </div>
      <div>
        <button onClick={() => setLength(length + 5)}>show more</button>
      </div>
    </>
  );
}

export default Catagorized;
