"use server";

import connectDb from "@/lib/db/db";
import { User } from "@/modules/user";
import { registerUserType } from "@/types";

export const userRegisterAction = async (
  values: registerUserType
): Promise<{ msg: string }> => {
  console.log(values);
  try {
    await connectDb();
    const user = await User.create({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "user register successfully" });
    });
  } catch (err) {
    return new Promise<{ msg: string }>((resolve, reject) => {
      resolve({ msg: "validation faled" });
    });
  }
};
