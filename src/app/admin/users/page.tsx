import { getUserAction } from "@/actions/getUsers";
import React from "react";

async function Page() {
  const users = await getUserAction();

  return (
    <section className="w-full p-[16px]">
      <header className="text-[2rem]">Users</header>
      <ul className="w-full">
        <li className="w-full text-color1  mb-[2px] flex justify-between px-[16px]">
          name <span>email</span> <span>Action</span>{" "}
        </li>
        {users.map((i, index) => {
          return (
            <li
              key={index}
              className="w-full bg-color5  mb-[2px] flex justify-between py-[8px] px-[16px]"
            >
              {i.name} <span> {i.email}</span> <span>something</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Page;
