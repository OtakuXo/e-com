"use client";
import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import Image from "next/image";
import { uploadSecma } from "./validationSchema";
import { uploadProductAction } from "@/actions/uploadProduct";
import { useRouter } from "next/navigation";
import { ProductType } from "@/types";

interface Img {
  img: string;
}

const initialValue: ProductType = {
  _id: "",
  image: "",
  name: "",
  price: "",
  rate: "",
  description: "",
  catagory: "plush",
};

function Page() {
  const route = useRouter();
  const [image, setImage] = useState<Img>({ img: "" });

  return (
    <section className=" h-screen flex items-center justify-center ">
      <Image
        width={500}
        height={500}
        sizes="100vw"
        style={{
          width: "300px",
          height: "auto",
          maxHeight: "80vh",
        }}
        src={image.img}
        alt="image"
      />
      <div className="bg-color2 p-10 rounded-lg">
        <Formik
          initialValues={initialValue}
          validationSchema={uploadSecma}
          onSubmit={async (values: ProductType, { resetForm }) => {
            try {
              const data = await uploadProductAction(values);
              route.refresh();
              alert(data.msg);
              resetForm();
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className="flex flex-col gap-5">
              <div>
                <input
                  name="image"
                  type="file"
                  placeholder="choose images"
                  onChange={(e) => {
                    const fileReader = new FileReader();

                    fileReader.onload = () => {
                      props.setFieldValue("image", fileReader.result);
                      setImage({ img: `${fileReader.result}` });
                    };
                    console.log("file", e.target.files);
                    console.log("reader", fileReader);
                    // if (fileReader.readyState === 0) return;
                    if (e.target.files) {
                      fileReader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                />
                <ErrorMessage name="image" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">name</label>
                <input
                  name="name"
                  placeholder="enter name of product"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
                <ErrorMessage
                  name="name"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price">price</label>
                <input
                  name="price"
                  placeholder="enter price of product"
                  value={props.values.price}
                  onChange={props.handleChange}
                />
                <ErrorMessage
                  name="price"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="rate">rating</label>
                <input
                  name="rate"
                  placeholder="enter rating of product"
                  value={props.values.rate}
                  onChange={props.handleChange}
                />
                <ErrorMessage
                  name="rate"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="description">description</label>
                <input
                  name="description"
                  placeholder="description"
                  value={props.values.description}
                  onChange={props.handleChange}
                />
                <ErrorMessage
                  name="description"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cattagory">catagory</label>
                <select
                  className="text-black"
                  name="catagory"
                  value={props.values.catagory}
                  onChange={props.handleChange}
                >
                  <option value="plush">plush</option>
                  <option value="figure">figure</option>
                  <option value="cloths">cloths</option>
                </select>
                <ErrorMessage
                  name="catagory"
                  component={"p"}
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-stone-800 text-gray-400 w-fit p-2 rounded-lg"
              >
                submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Page;
