import React, { Component } from "react";
import PropTypes from "prop-types";
import categories from "../../data/categories";

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  render() {
    const { name, price, currency, image, isInCart, CategoryTypeID } = this.props;

    return (
      <div className="product thumbnail">
        <img src={image} alt="product" />
        <div className="caption">
          <h3>name: {name}</h3>
          <h5>Category: {categories.find(item => item.CategoryType === CategoryTypeID).name}</h5>

          <div className="product__price">
            {price} {currency}
          </div>
          <div className="product__button-wrap">
            <button
              className={isInCart ? "btn btn-danger" : "btn btn-primary"}
              onClick={this.handleClick}
            >
              {isInCart ? "Remove" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
