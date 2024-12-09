import React from "react";
import Link from "next/link";

function Links({
  i,
}: {
  i: { text: string | null | undefined; link: string };
}) {
  return (
    <li className="p-[4px] rounded-lg hover:text-color3 cursor-pointer ">
      <Link href={i.link}>{i.text}</Link>
    </li>
  );
}

export default Links;
