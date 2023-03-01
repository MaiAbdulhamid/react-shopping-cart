import { atom } from "@mongez/react-atom";
import products from "../data/products";

export const categoryAtom = atom({
  key: "category",
  default: {
    category: null,
    products: products
  }
})