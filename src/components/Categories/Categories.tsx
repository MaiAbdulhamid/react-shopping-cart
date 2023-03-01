import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { categoryAtom } from "../../atoms/category-atoms";
import products from "../../data/products";

const Categories = ({ categories }) => {

  const handleChange = (e) => {
    const categoryId = Number(e.target.value);
    categoryAtom.update({
      category: categories.find(category => category.id === categoryId),
      products: isNaN(categoryId) ? products : products.filter(product => product.CategoryTypeID === categoryId)
    });
  };


  return (
    <div className="text-right">
      <label htmlFor="allCategories">Select Category: </label>
      <Form.Select id="allCategories" onChange={handleChange}>
        <option>All Categories</option>
        {categories.map((item, index) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </Form.Select>
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.array,
};
export default Categories;
