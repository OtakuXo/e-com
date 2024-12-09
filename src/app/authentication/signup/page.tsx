"use client";
import { signupSechma } from "./validationsechma";
import React from "react";
import { Formik, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { registerUserType } from "@/types";
import { userRegisterAction } from "@/actions/userRegister";

const Page: React.FC<{}> = () => {
  const route = useRouter();
  const inititaValue: registerUserType = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };

  return (
    <section className=" h-screen  flex items-center justify-center ">
      <div className=" bg-slate-500 text-black p-10 rounded-lg ">
        <h2 className="w-full text-3xl flex justify-center">Sign up</h2>
        <Formik
          initialValues={inititaValue}
          validationSchema={signupSechma}
          onSubmit={async (values: registerUserType) => {
            try {
              const data = await userRegisterAction(values);
              alert(data.msg);
              route.push("/home");
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="rounded-sm"
                value={props.values.name}
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="name"
                component={"p"}
                className="text-red-500"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="rounded-sm"
                value={props.values.email}
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-red-500"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="rounded-sm"
                value={props.values.password}
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="password"
                component={"p"}
                className="text-red-500"
              />
              <label htmlFor="cpassword">conform password</label>
              <input
                type="password"
                name="cpassword"
                className="rounded-sm"
                value={props.values.cpassword}
                onChange={props.handleChange}
              />
              <ErrorMessage
                name="cpassword"
                component={"p"}
                className="text-red-500"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-stone-800 text-gray-400 w-fit p-2 rounded-lg"
                >
                  sign up
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Page;
