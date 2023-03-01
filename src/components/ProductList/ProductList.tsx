import React from "react";
import Product from "../../containers/Product";
import { categoryAtom } from "../../atoms/category-atoms";
import { ProductListItem, ProductUl } from "./style";

const ProductList = () => {
  const products = categoryAtom.use('products');
  return (
    <div>
      <h3>Products</h3>
      <ProductUl>
        {products.length === 0 && (
          <div className="alert alert-info">There Are No Products</div>
        )}
        {products.map((product) => (
          <ProductListItem key={product.id}>
            <Product {...product} />
          </ProductListItem>
        ))}
      </ProductUl>
    </div>
  );
};

export default ProductList;
