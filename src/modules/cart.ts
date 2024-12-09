import mongoose, { Document, Schema } from "mongoose";

export interface ICart extends Document {
  uid: string;
  items: [
    {
      name: string;
      price: string;
      catagory: string[];
    }
  ];
}

const cartSechma: Schema = new mongoose.Schema<ICart>({
  uid: {
    type: String,
  },
  items: [
    {
      name: {
        type: String,
      },
      price: {
        type: String,
      },
      catagory: {
        type: [String],
      },
    },
  ],
});

export const Cart =
  mongoose.models.Cart || mongoose.model<ICart>("Cart", cartSechma);
