"use client";
import { useEffect, useState } from "react";
import { ICard } from "@/types";
import Card from "@/components/card";
import { getRecomendedItemsAction } from "@/actions/getRecomendation";
import { CardsScalatonArray } from "@/components/suspenseScalaton/cardsScalaton";

function Recomended() {
  const [length, setLength] = useState<number>(10);
  const [RecomendedItems, serRecomendedItems] = useState<ICard[]>();

  useEffect(() => {
    const getItems = async () => {
      const res = await getRecomendedItemsAction(length);
      console.log(res);
      serRecomendedItems(res);
    };

    getItems();
  }, [length]);

  if (!RecomendedItems) {
    return (
      <>
        <CardsScalatonArray />;
      </>
    );
  }

  return (
    <>
      {RecomendedItems.map((i: ICard) => (
        <Card key={i._id} i={i} />
      ))}
      <button onClick={() => setLength(length + 5)}>show more</button>
    </>
  );
}

export default Recomended;
