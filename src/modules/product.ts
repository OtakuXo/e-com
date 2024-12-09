import mongoose, { Document, Schema } from "mongoose";

export interface IProducts extends Document {
  name: string;
  image: string;
  price: string;
  rate: string;
  description: string;
  catagory: string;
}

const productSchema: Schema = new mongoose.Schema<IProducts>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "name missing"],
    },
    image: {
      type: String,
      unique: true,
      required: [true, "image missing"],
    },
    price: {
      type: String,
      required: [true, "price missing"],
    },
    rate: {
      type: String,
      required: [true, "rate missing"],
    },
    description: {
      type: String,
    },
    catagory: {
      type: String,
      required: [true, "catagory missing"],
    },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models.Products ||
  mongoose.model<IProducts>("Products", productSchema);
