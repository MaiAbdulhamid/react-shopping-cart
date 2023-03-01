import React from "react";
import { categoryAtom } from "../../atoms/category-atoms";

export default function Header() {
  const category = categoryAtom.use("category")
  return (
    <div className="row">
      <p className="text-center">{category?.name || "All Products"}</p>
    </div>
  );
}
