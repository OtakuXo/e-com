import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { User } from "@/modules/user";
import connectDb from "@/lib/db/db";
import Link from "next/link";
import Image from "next/image";

type User = {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    roles: string;
    createdAt: string;
    updatedAt: string;
  };
};

const userAction = async (session: User) => {
  "use server";
  try {
    await connectDb();
    const user = await User.findOne({ email: session.user.email });

    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
};

async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/unauthorize");
  }
  const user = await userAction(session);
  if (!user) {
    return <div>no user found</div>;
  }

  return (
    <section className="flex justify-center">
      <div>
        <div className="flex flex-col items-center ">
          <Link href="/profile/updataAvatar">
            <Image
              height={500}
              width={500}
              src={user.avatar || "/user.png"}
              sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
              style={{
                minWidth: "100px",
                minHeight: "100px",
                width: "10vw",
                height: "10vw",
                objectFit: "cover",
                borderRadius: "50%",
                objectPosition: "0px 0%",
              }}
              alt=""
            />
          </Link>
          <div>{user.name}</div>
        </div>
        <div className="w-full h-1 bg-gray-600"></div>
        <div className="flex justify-center">
          <ul>
            <li> user details</li>
            <li>id: {user._id}</li>
            <li>email: {user.email}</li>
            <li>role: {user.roles}</li>
            {user.roles === "admin" && (
              <Link href={"/admin/dashboard"}> to admin panel </Link>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;
