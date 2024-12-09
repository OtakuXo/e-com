"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import connectDb from "@/lib/db/db";
import { User } from "@/modules/user";
import { msg } from "@/types";
import { getServerSession } from "next-auth";

export const updateAvatarAction = async (image: string): Promise<msg> => {
  const session = await getServerSession(options);

  if (!session) {
    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "access denies" });
    });
  }
  try {
    await connectDb();
    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        $set: {
          avatar: image,
        },
      }
    );

    return new Promise<msg>((resolve, reject) => {
      resolve({
        msg: "your avatar has been updated",
      });
    });
  } catch (err) {
    return new Promise<msg>((resolve, reject) => {
      resolve({ msg: "an error occred while updating avatar" });
    });
  }
};
