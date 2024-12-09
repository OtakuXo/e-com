"use client";
import { Formik, ErrorMessage } from "formik";
import { uploadSecma } from "../addproduct/validationSchema";
import { ProductType } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { updateProductAction } from "@/actions/updateProduct";

function Editform({ product }: { product: ProductType }) {
  // console.log(product);
  const [image, setImage] = useState<{ img: string }>({ img: product.image });
  const [initialValue, setInitialValue] = useState<ProductType>({
    _id: product._id,
    image: product.image,
    name: product.name,
    price: product.price,
    rate: product.rate,
    description: product.description,
    catagory: product.catagory,
  });

  useEffect(() => {
    setImage({ img: product.image });
    setInitialValue({
      _id: product._id,
      image: product.image,
      name: product.name,
      price: product.price,
      rate: product.rate,
      description: product.description,
      catagory: product.catagory,
    });
  }, [product]);

  console.log("initial value:", initialValue);
  return (
    <>
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
          enableReinitialize
          validationSchema={uploadSecma}
          onSubmit={async (values: ProductType, { resetForm }) => {
            try {
              console.log(values);
              const data = await updateProductAction(values);
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
                  name="catagory"
                  className="text-black"
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
    </>
  );
}

export default Editform;
