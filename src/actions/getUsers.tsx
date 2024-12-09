"use server";

import connectDb from "@/lib/db/db";
import { User } from "@/modules/user";
import { getUserType } from "@/types";

export const getUserAction = async (): Promise<getUserType[]> => {
  try {
    await connectDb();
    const user = await User.find({}).limit(10);
    return new Promise<getUserType[]>((resolve, reject) => {
      resolve(user);
    });
  } catch (err) {
    throw err;
    // return new Promise<{ msg: string }>((resolve, reject) => {
    //   reject({ msg: "validation faled" });
    // });
  }
};
