import { atom } from "@mongez/react-atom";

export const categoryAtom = atom({
  key: "cart",
  default: {
    items: null,
  }
})