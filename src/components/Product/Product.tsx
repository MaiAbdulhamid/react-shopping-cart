import { Component } from "react";
import categories from "../../data/categories";
import { ProductButtonWrapper, SingleProduct, ProductPrice } from "./style";

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } : any = this.props;

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  render() {
    const { name, price, currency, image, isInCart, CategoryTypeID } : any = this.props;

    return (
      <SingleProduct className="thumbnail">
        <img src={image} alt="product" />
        <div className="caption">
          <h3>{name}</h3>
          <h5>Category: {categories.find(item => item.CategoryType === CategoryTypeID).name}</h5>

          <ProductPrice>
            {price} {currency}
          </ProductPrice>
          <ProductButtonWrapper>
            <button
              className={isInCart ? "btn btn-danger" : "btn btn-primary"}
              onClick={this.handleClick}
            >
              {isInCart ? "Remove" : "Add to cart"}
            </button>
          </ProductButtonWrapper>
        </div>
      </SingleProduct>
    );
  }
}

export default Product;
