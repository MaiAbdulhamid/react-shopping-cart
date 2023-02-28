import React, { Component } from "react";
import Form from "react-bootstrap/Form";
//import categories from "../../data/categories";
import PropTypes from "prop-types";

const Categories = ({ categories, chosenCategory }) => {
  const handleChange = (e) => {
    chosenCategory(e.target.value)
  };

  console.log(chosenCategory)

  return (
    <div className="text-right">
      <label htmlFor="allCategories">All Categories: </label>
      <Form.Select id="allCategories" onChange={handleChange}>
        <option>Open this select menu</option>
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
