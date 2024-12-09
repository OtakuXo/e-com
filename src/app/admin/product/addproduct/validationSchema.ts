import * as yup from "yup";

export const uploadSecma = yup.object({
  name: yup
    .string()
    .required("cannot be empty")
    .min(4, "must contain more than 4 characters"),
  image: yup.mixed().required("image is required"),
  price: yup.number().required("price is required"),
  rete: yup.number(),
  desctiption: yup.string(),
  catagory: yup.string().default("plush"),
});
