export type msg = {
  msg: string;
};

type nested = {
  text: string;
  link: string;
};
export type navType = {
  text: string;
  link?: string;
  subitems?: nested[];
};

export type registerUserType = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

export type getUserType = {
  name: string;
  email: string;
};

export interface ProductType {
  _id: string;
  name: string;
  image: string;
  price: string;
  rate: string;
  description: string;
  catagory: string;
}

export type CartItem = {
  name: string;
  price: string;
  catagory: string;
  _id: string;
};

export interface ICard {
  _id: any;
  name: string;
  image: string;
  price: string;
  rate: string;
}

export type linksType = {
  text: string;
  link: string;
};

export type reviewType = {
  text: string;
  massage: string;
};
