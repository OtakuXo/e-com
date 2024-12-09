"use client";
import React, { useEffect, useState } from "react";
import { getLatestItemsAction } from "@/actions/getLatestItems";
import { ICard } from "@/types";
import Card from "../../components/card";
import { CardsScalatonArray } from "@/components/suspenseScalaton/cardsScalaton";

function LatesrItems() {
  const [length, setLength] = useState<number>(7);
  const [latestItems, setLatestItems] = useState<ICard[]>();

  useEffect(() => {
    const getItems = async () => {
      const res = await getLatestItemsAction(length);
      console.log(res);
      setLatestItems(res);
    };
    getItems();
  }, [length]);

  if (!latestItems) {
    return (
      <>
        <CardsScalatonArray />;
      </>
    );
  }

  return (
    <>
      {latestItems.map((i: ICard) => (
        <Card key={i._id} i={i} />
      ))}
      <button onClick={() => setLength(length + 5)} className="">
        show more
      </button>
    </>
  );
}

export default LatesrItems;
